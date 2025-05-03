"use client";

import { useEffect, useState } from "react";
import {
  fetchAllDataByCity,
  fetchAllDataByCoords,
} from "@/lib/api";
import Navbar from "@/components/Navbar";
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
  const [isFallbackLocation, setIsFallbackLocation] = useState(false);
  const [notFoundCity, setNotFoundCity] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedLocation");
      if (saved) setCity(saved);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { weather, airQuality, displayLocation } = await fetchAllDataByCity(city);
        setWeather(weather);
        setAirQuality(airQuality);
        setDisplayLocation(displayLocation);
        setIsFallbackLocation(false);
        setNotFoundCity("");
        localStorage.setItem("selectedLocation", city);
      } catch (error) {
        console.error("Error fetching data:", error);
        setWeather(null);
        setAirQuality(null);
        setDisplayLocation("");
        setNotFoundCity(city); 
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const { weather, airQuality, displayLocation } =
              await fetchAllDataByCoords(latitude, longitude);

            const coordString = `${latitude},${longitude}`;
            setWeather(weather);
            setAirQuality(airQuality);
            setDisplayLocation(displayLocation);
            setIsFallbackLocation(displayLocation === "Lokasi Tidak Diketahui");
            setNotFoundCity("");
            localStorage.setItem("selectedLocation", displayLocation);
          } catch (error) {
            console.error("Gagal mendapatkan data lokasi:", error);
            alert("Gagal mendapatkan data berdasarkan lokasi.");
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
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50 mt-6 rounded-lg shadow-md">
        <SearchBar
          onSearch={(newCity) => setCity(newCity)}
          onUseCurrentLocation={handleUseCurrentLocation}
          currentLocation={displayLocation}
        />

        {notFoundCity && (
          <p className="text-red-500 font-semibold text-center">
            Lokasi: {notFoundCity} tidak ditemukan
          </p>
        )}

        {weather && (
          <>
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
