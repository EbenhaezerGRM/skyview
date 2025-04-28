const HourlyAirQuality = ({ hourly }) => {
    if (!hourly) return null;
  
    return (
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Kualitas Udara - 24 Jam</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hourly.time.slice(0, 24).map((time, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{new Date(time).getHours()}:00</p>
              <p>AQI: {hourly.us_aqi[index]}</p>
              <p>PM2.5: {hourly.pm2_5[index]} µg/m³</p>
              <p>CO: {hourly.carbon_monoxide[index]} ppm</p>
              <p>NO: {hourly.nitrogen_monoxide[index]} ppb</p>
              <p>NO₂: {hourly.nitrogen_dioxide[index]} ppb</p>
              <p>SO₂: {hourly.sulphur_dioxide[index]} ppb</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default HourlyAirQuality;
  