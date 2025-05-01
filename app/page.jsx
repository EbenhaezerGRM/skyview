"use client";
import { useEffect, useState } from "react";
import { fetchWeatherData, fetchAirQualityData } from "@/lib/api";
import Navbar from "@/components/Navbar"; // ✅ Tambahkan ini
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import HourlyForecast from "@/components/HourlyForecast";
import DailyForecast from "@/components/DailyForecast";
import AirQualityCard from "@/components/AirQualityCard";
import HourlyAirQuality from "@/components/HourlyAirQuality";

const HomePage = () => {
  const [city, setCity] = useState("Bekasi");
  const [displayLocation, setDisplayLocation] = useState("Bekasi");
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeatherData(city);
        if (data) {
          setWeather(data);
          if (!city.includes(",")) {
            setDisplayLocation(data.address || "Lokasi Tidak Diketahui");
          }

          if (data.latitude && data.longitude) {
            const airQualityData = await fetchAirQualityData(data.latitude, data.longitude);
            setAirQuality(airQualityData);
          }
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [city]);

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=id`
      );
      const data = await response.json();
      return data.city || data.locality || "Lokasi Tidak Diketahui";
    } catch (error) {
      console.error("Gagal mendapatkan nama lokasi:", error);
      return "Lokasi Tidak Diketahui";
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const cityName = await reverseGeocode(latitude, longitude);
            setCity(`${latitude},${longitude}`);
            setDisplayLocation(cityName);
          } catch (error) {
            console.error("Gagal mendapatkan lokasi:", error);
          }
        },
        (error) => {
          console.error("Gagal mengakses lokasi:", error);
          alert("Gagal mendapatkan lokasi. Pastikan GPS aktif.");
        }
      );
    } else {
      alert("Geolocation tidak didukung oleh browser Anda.");
    }
  };

  return (
    <>
      <Navbar /> {/* ✅ Tambahkan Navbar di atas */}
      <main className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50 mt-6 rounded-lg shadow-md">
        <SearchBar
          onSearch={(newCity) => {
            setCity(newCity);
            setDisplayLocation(newCity);
          }}
          onUseCurrentLocation={handleUseCurrentLocation}
        />

        {weather && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Lokasi saat ini: <span className="text-blue-600">{displayLocation}</span>
            </h2>

            <div className="space-y-6">
              <WeatherCard weather={weather.currentConditions} />
              <HourlyForecast hours={weather.days[0]?.hours || []} />
              <DailyForecast days={weather.days?.slice(0, 10) || []} />
            </div>

            {airQuality && (
              <div className="space-y-6 mt-6">
                <AirQualityCard airQuality={airQuality} />
                <HourlyAirQuality hourly={airQuality.hourly} />
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default HomePage;