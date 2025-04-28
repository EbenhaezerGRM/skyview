import weatherIcons from "@/utils/icons";
import getHealthRecommendation from "@/utils/healthRecommendations";

const WeatherCard = ({ weather }) => {
  const { temp, feelslike, windspeed, humidity, conditions, icon, resolvedAddress } = weather;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-1">Current Weather</h2>
      <h3 className="text-md mb-4">{resolvedAddress}</h3>
      <div className="flex items-center space-x-6">
        <span className="text-6xl">{weatherIcons[icon]}</span>
        <div>
          <p className="text-4xl font-bold">{temp}°C</p>
          <p className="text-lg">Feels like: {feelslike}°C</p>
          <p className="text-lg capitalize">{conditions}</p>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <p className="text-lg">🌬️ Wind: {windspeed} km/h</p>
        <p className="text-lg">💧 Humidity: {humidity}%</p>
      </div>
      <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg">
        <p className="text-lg">🔹 {getHealthRecommendation(icon)}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
