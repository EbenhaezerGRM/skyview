import {
  FaSmog,
  FaBiohazard,
  FaTemperatureHigh,
  FaCloud,
  FaWind,
} from "react-icons/fa";

const getAQIMessage = (aqi) => {
  if (aqi <= 50)
    return { message: "Baik ✅", color: "bg-green-100 text-green-800" };
  if (aqi <= 100)
    return { message: "Sedang ⚠️", color: "bg-yellow-100 text-yellow-800" };
  if (aqi <= 150)
    return {
      message: "Tidak sehat untuk kelompok sensitif 🟠",
      color: "bg-orange-100 text-orange-800",
    };
  if (aqi <= 200)
    return { message: "Tidak sehat ❌", color: "bg-red-100 text-red-800" };
  if (aqi <= 300)
    return {
      message: "Sangat tidak sehat 🛑",
      color: "bg-purple-100 text-purple-800",
    };
  return { message: "Berbahaya ☠️", color: "bg-black text-white" };
};

const AirQualityCard = ({ airQuality }) => {
  if (!airQuality) return null;

  const { us_aqi, pm2_5, co, no, no2, so2 } = airQuality.current;
  const aqiInfo = getAQIMessage(us_aqi);

  return (
    <div className="p-6 md:p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
        🌍 Kualitas Udara Saat Ini
      </h2>

      <div
        className={`inline-block px-4 py-2 rounded-full font-medium mb-6 text-sm ${aqiInfo.color}`}
      >
        US AQI: <strong>{us_aqi}</strong> — {aqiInfo.message}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-gray-800">
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
          <FaSmog className="text-blue-500 text-xl" />
          <div>
            <p className="font-semibold">PM2.5</p>
            <p>{pm2_5} µg/m³</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
          <FaBiohazard className="text-red-500 text-xl" />
          <div>
            <p className="font-semibold">Karbon Monoksida (CO)</p>
            <p>{co} ppm</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
          <FaTemperatureHigh className="text-yellow-500 text-xl" />
          <div>
            <p className="font-semibold">Nitrogen Monoksida (NO)</p>
            <p>{no} ppb</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
          <FaCloud className="text-purple-500 text-xl" />
          <div>
            <p className="font-semibold">Nitrogen Dioksida (NO₂)</p>
            <p>{no2} ppb</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
          <FaWind className="text-green-600 text-xl" />
          <div>
            <p className="font-semibold">Sulfur Dioksida (SO₂)</p>
            <p>{so2} ppb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQualityCard;
