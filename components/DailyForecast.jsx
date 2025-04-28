import weatherIcons from "@/utils/icons";

const DailyForecast = ({ days }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Prakiraan 10 Hari</h2>
      <div className="space-y-3">
        {days.map((day, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">{day.datetime}</p>
            <span className="text-2xl">{weatherIcons[day.icon]}</span>
            <p className="text-gray-700">{day.temp}°C</p>
            <p className="text-gray-700">{day.humidity}% RH</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
