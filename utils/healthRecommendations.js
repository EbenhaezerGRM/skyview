const getHealthRecommendation = (condition) => {
    const recommendations = {
      snow: "Pakai jaket tebal dan hati-hati di jalan.",
      rain: "Gunakan payung atau jas hujan.",
      fog: "Kurangi kecepatan saat berkendara.",
      wind: "Hindari area terbuka, angin kencang!",
      cloudy: "Cuaca mendung, siapkan jas hujan.",
      "partly-cloudy-day": "Gunakan kacamata hitam jika bepergian.",
      "partly-cloudy-night": "Suhu dingin, gunakan pakaian hangat.",
      "clear-day": "Hari cerah, jangan lupa sunscreen!",
      "clear-night": "Langit cerah, cocok untuk melihat bintang.",
    };
    return recommendations[condition] || "Tetap waspada terhadap perubahan cuaca.";
  };
  
  export default getHealthRecommendation;
  