import weatherIcons from "@/utils/icons";

const HourlyForecast = ({ hours }) => {
  return (
    <div className="p-6 md:p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
        ⏰ Prakiraan Cuaca - 24 Jam
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {hours.map((hour, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-4 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100"
          >
            <p className="text-xs sm:text-sm text-gray-600">{hour.datetime}</p>
            <p className="text-3xl sm:text-4xl md:text-5xl">{weatherIcons[hour.icon]}</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{hour.temp}°C</p>
            <p className="text-xs sm:text-sm text-gray-600">{hour.humidity}% RH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
