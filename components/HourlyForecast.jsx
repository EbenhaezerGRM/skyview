import weatherIcons from "@/utils/icons";

const HourlyForecast = ({ hours }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Prakiraan 24 Jam</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hours.map((hour, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">{hour.datetime}</p>
            <p className="text-2xl">{weatherIcons[hour.icon]}</p>
            <p className="text-gray-700">{hour.temp}°C</p>
            <p className="text-gray-700">{hour.humidity}% RH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;