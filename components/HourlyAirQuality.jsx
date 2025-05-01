import {
  FaSmog,
  FaCloud,
  FaTemperatureHigh,
  FaBiohazard,
  FaWind,
  FaClock,
} from "react-icons/fa";

const getAQIColor = (aqi) => {
  if (aqi <= 50) return { color: "bg-green-100 text-green-800", label: "Baik" };
  if (aqi <= 100) return { color: "bg-yellow-100 text-yellow-800", label: "Sedang" };
  if (aqi <= 150) return { color: "bg-orange-100 text-orange-800", label: "Tidak Sehat (Sensitif)" };
  if (aqi <= 200) return { color: "bg-red-100 text-red-800", label: "Tidak Sehat" };
  if (aqi <= 300) return { color: "bg-purple-100 text-purple-800", label: "Sangat Tidak Sehat" };
  return { color: "bg-black text-white", label: "Berbahaya" };
};

const HourlyAirQuality = ({ hourly }) => {
  if (!hourly) return null;

  return (
    <div className="p-6 md:p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🕐 Kualitas Udara - 24 Jam</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {hourly.time.slice(0, 24).map((time, index) => {
          const hour = new Date(time).getHours();
          const aqi = hourly.us_aqi[index];
          const info = getAQIColor(aqi);

          return (
            <div
              key={index}
              className="rounded-xl bg-white shadow-lg border border-gray-100 p-4 hover:shadow-xl transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                  <FaClock className="text-blue-500" /> {hour}:00
                </span>
              </div>

              {/* AQI and Status */}
              <div className="flex flex-col items-start gap-2 mt-2 md:mt-4">
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${info.color}`}
                >
                  AQI: {aqi} — {info.label}
                </span>
              </div>

              <hr className="my-2" />

              {/* Other Air Quality Data */}
              <div className="space-y-1 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <FaSmog className="text-blue-500" />
                  PM2.5: {hourly.pm2_5[index]} µg/m³
                </div>
                <div className="flex items-center gap-2">
                  <FaBiohazard className="text-red-500" />
                  CO: {hourly.carbon_monoxide[index]} ppm
                </div>
                <div className="flex items-center gap-2">
                  <FaTemperatureHigh className="text-yellow-500" />
                  NO: {hourly.nitrogen_monoxide[index]} ppb
                </div>
                <div className="flex items-center gap-2">
                  <FaCloud className="text-purple-500" />
                  NO₂: {hourly.nitrogen_dioxide[index]} ppb
                </div>
                <div className="flex items-center gap-2">
                  <FaWind className="text-green-600" />
                  SO₂: {hourly.sulphur_dioxide[index]} ppb
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyAirQuality;
