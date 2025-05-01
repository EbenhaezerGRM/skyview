import weatherIcons from "@/utils/icons";

const DailyForecast = ({ days }) => {
  return (
    <div className="p-6 md:p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
        🌤️ Prakiraan Harian
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-100"
          >
            <p className="text-xs sm:text-sm md:text-base text-gray-600">{day.datetime}</p>
            <span className="text-3xl sm:text-4xl">{weatherIcons[day.icon]}</span>
            <div className="text-center">
              <p className="text-xl sm:text-2xl font-bold text-blue-600">{day.temp}°C</p>
              <p className="text-xs sm:text-sm text-gray-600">{day.humidity}% RH</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
