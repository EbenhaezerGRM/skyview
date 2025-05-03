"use client";

import { useEffect, useState } from "react";
import { fetchWeatherData, fetchAirQualityData } from "@/lib/api";
import {
  FaRunning,
  FaBicycle,
  FaFish,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import Navbar from "@/components/Navbar";

const getColorClass = (level) => {
  switch (level) {
    case "Low":
      return "bg-green-100 text-green-800 border-green-300";
    case "Moderate":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "High":
      return "bg-red-100 text-red-800 border-red-300";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const getRiskLevel = (value, thresholds) => {
  if (value >= thresholds.high) return "High";
  if (value >= thresholds.moderate) return "Moderate";
  return "Low";
};

const assessHealthRisks = (weather, airQuality) => {
  const { temp, humidity, uvindex } = weather;
  const { pm2_5, no2 } = airQuality;

  return [
    {
      name: "Common Cold",
      level: getRiskLevel(temp, { moderate: 15, high: 10 }),
    },
    {
      name: "Asthma",
      level: getRiskLevel(pm2_5, { moderate: 20, high: 35 }),
    },
    {
      name: "Heat Stroke",
      level: getRiskLevel(temp, { moderate: 32, high: 37 }),
    },
    {
      name: "Bronchitis",
      level: getRiskLevel(no2, { moderate: 50, high: 100 }),
    },
    {
      name: "Allergies",
      level: getRiskLevel(humidity, { moderate: 75, high: 85 }),
    },
  ];
};

const assessActivities = (weather, airQuality) => {
  const { uvindex } = weather;
  const { us_aqi } = airQuality;

  const aqiLevel = getRiskLevel(us_aqi, { moderate: 50, high: 100 });
  const uvLevel = getRiskLevel(uvindex, { moderate: 6, high: 8 });

  const isSafe = (level) => level === "Low";

  return [
    {
      name: "Berlari",
      icon: <FaRunning className="text-3xl" />,
      level: isSafe(aqiLevel) && isSafe(uvLevel) ? "Low" : "Moderate",
    },
    {
      name: "Bersepeda",
      icon: <FaBicycle className="text-3xl" />,
      level: isSafe(aqiLevel) ? "Low" : "Moderate",
    },
    {
      name: "Memancing",
      icon: <FaFish className="text-3xl" />,
      level: isSafe(aqiLevel) ? "Low" : "Moderate",
    },
    {
      name: "Bermain di Pantai",
      icon: <FaUmbrellaBeach className="text-3xl" />,
      level: isSafe(uvLevel) ? "Low" : "High",
    },
  ];
};

const HealthPage = () => {
  const [weather, setWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [location, setLocation] = useState("Bekasi");

  useEffect(() => {
    const getData = async () => {
      try {
        const savedLocation = localStorage.getItem("selectedLocation") || "Bekasi";
        setLocation(savedLocation);

        const weatherData = await fetchWeatherData(savedLocation);
        const currentWeather = weatherData.currentConditions;
        const airData = await fetchAirQualityData(
          weatherData.latitude,
          weatherData.longitude
        );

        setWeather({
          temp: currentWeather.temp,
          humidity: currentWeather.humidity,
          windspeed: currentWeather.windspeed,
          uvindex: currentWeather.uvindex,
        });

        setAirQuality(airData.current);
      } catch (error) {
        console.error("Gagal memuat data:", error);
      }
    };

    getData();
  }, []);

  if (!weather || !airQuality) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center text-gray-600">
          Memuat data kesehatan & aktivitas...
        </div>
      </>
    );
  }

  const healthRisks = assessHealthRisks(weather, airQuality);
  const activities = assessActivities(weather, airQuality);

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <BsExclamationTriangle className="text-yellow-500" />
          Dampak Cuaca & Udara terhadap Kesehatan dan Aktivitas
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Lokasi saat ini: <span className="font-semibold">{location}</span>
        </p>

        <div className="bg-white shadow-lg border rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            🩺 Risiko Kesehatan Umum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {healthRisks.map((risk, index) => (
              <div
                key={index}
                className={`border-l-4 p-4 rounded-md shadow-sm border ${getColorClass(
                  risk.level
                )}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">{risk.name}</span>
                  <span
                    className={`text-sm px-3 py-1 rounded-full border ${getColorClass(
                      risk.level
                    )}`}
                  >
                    {risk.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            <FiActivity className="inline mr-2" />
            Rekomendasi Aktivitas Outdoor
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {activities.map((act, index) => (
              <div
                key={index}
                className={`rounded-xl p-4 flex flex-col items-center border hover:shadow-md transition-all duration-300 ${getColorClass(
                  act.level
                )}`}
              >
                <div className="mb-3">{act.icon}</div>
                <h3 className="text-lg font-medium">{act.name}</h3>
                <span className="text-sm mt-1">{act.level} Risk</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthPage;
