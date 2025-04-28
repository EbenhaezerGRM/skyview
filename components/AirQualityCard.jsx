const getAQIMessage = (aqi) => {
  if (aqi <= 50) return "Baik ✅";
  if (aqi <= 100) return "Sedang ⚠️";
  if (aqi <= 150) return "Tidak sehat untuk kelompok sensitif 🟠";
  if (aqi <= 200) return "Tidak sehat ❌";
  if (aqi <= 300) return "Sangat tidak sehat 🛑";
  return "Berbahaya ☠️";
};

const AirQualityCard = ({ airQuality }) => {
  if (!airQuality) return null;

  const { us_aqi, pm2_5, co, no, no2, so2 } = airQuality.current;

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Kualitas Udara 🌍</h2>
      <p className="text-lg font-bold">US AQI: {us_aqi} - {getAQIMessage(us_aqi)}</p>
      <p>PM2.5: {pm2_5} µg/m³</p>
      <p>CO (Karbon Monoksida): {co} ppm</p>
      <p>NO (Nitrogen Monoksida): {no} ppb</p>
      <p>NO₂ (Nitrogen Dioksida): {no2} ppb</p>
      <p>SO₂ (Sulfur Dioksida): {so2} ppb</p>
    </div>
  );
};

export default AirQualityCard;
