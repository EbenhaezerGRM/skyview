import weatherIcons from "@/utils/icons";
import getHealthRecommendation from "@/utils/healthRecommendations";

const WeatherCard = ({ weather }) => {
  const { temp, feelslike, windspeed, humidity, conditions, icon, resolvedAddress } = weather;

  return (
    <div className="p-6 md:p-8 rounded-2xl shadow-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="text-6xl md:text-7xl">{weatherIcons[icon]}</div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">{resolvedAddress}</h2>
            <p className="text-sm text-white/80 capitalize">{conditions}</p>
          </div>
        </div>

        <div className="text-center w-full md:w-auto mt-4 md:mt-0">
          <p className="text-5xl font-extrabold">{temp}°C</p>
          <p className="text-md text-white/80">Feels like {feelslike}°C</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-4 text-white text-sm">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md">
          <p className="font-semibold">🌬️ Kecepatan Angin</p>
          <p>{windspeed} km/h</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md">
          <p className="font-semibold">💧 Kelembapan</p>
          <p>{humidity}%</p>
        </div>
      </div>

      <div className="mt-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
        <p className="text-sm md:text-base">🔹 {getHealthRecommendation(icon)}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
