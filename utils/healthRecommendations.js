const getHealthRecommendation = (condition) => {
  const recommendations = {
    snow: [
      "Pakai jaket tebal dan sepatu anti selip.",
      "Waspadai jalanan licin, berjalanlah hati-hati.",
      "Kurangi aktivitas luar ruangan jika tidak perlu."
    ],
    rain: [
      "Gunakan payung atau jas hujan saat bepergian.",
      "Waspadai genangan air dan banjir.",
      "Gunakan alas kaki anti selip."
    ],
    fog: [
      "Kurangi kecepatan saat berkendara.",
      "Hidupkan lampu kabut jika berkendara.",
      "Hindari bepergian jika visibilitas sangat rendah."
    ],
    wind: [
      "Hindari area terbuka, angin kencang!",
      "Amankan benda-benda yang bisa tertiup angin.",
      "Jangan berdiri dekat pohon besar atau papan reklame."
    ],
    cloudy: [
      "Cuaca mendung, siapkan jas hujan.",
      "Meskipun mendung, tetap gunakan sunscreen.",
      "Cuaca redup, aktivitas luar tetap aman."
    ],
    "partly-cloudy-day": [
      "Gunakan kacamata hitam jika bepergian.",
      "Cuaca cukup nyaman untuk aktivitas luar ruangan.",
      "Bawa payung kecil untuk berjaga-jaga."
    ],
    "partly-cloudy-night": [
      "Suhu dingin, gunakan pakaian hangat.",
      "Nikmati udara malam yang segar.",
      "Jangan lupa jaket jika keluar malam."
    ],
    "clear-day": [
      "Hari cerah, jangan lupa sunscreen!",
      "Minum air putih yang cukup agar tidak dehidrasi.",
      "Gunakan topi atau pelindung kepala."
    ],
    "clear-night": [
      "Langit cerah, cocok untuk melihat bintang.",
      "Suhu bisa turun drastis di malam hari, kenakan pakaian hangat.",
      "Cuaca ideal untuk jalan santai malam hari."
    ],
    thunderstorm: [
      "Tunda aktivitas luar ruangan, waspada petir.",
      "Hindari berteduh di bawah pohon saat hujan deras.",
      "Cabut perangkat elektronik untuk menghindari lonjakan listrik."
    ],
    hail: [
      "Cari tempat berlindung, hujan es berbahaya.",
      "Jangan berada di luar saat hujan es terjadi.",
      "Amankan kendaraan dan barang-barang di luar."
    ],
    hot: [
      "Hindari paparan langsung matahari terlalu lama.",
      "Gunakan pakaian berbahan ringan dan berwarna terang.",
      "Perbanyak minum air putih untuk mencegah dehidrasi."
    ],
    cold: [
      "Kenakan pakaian berlapis untuk menjaga kehangatan.",
      "Hindari berada di luar terlalu lama.",
      "Minum minuman hangat untuk menjaga suhu tubuh."
    ]
  };

  const list = recommendations[condition];
  if (!list || list.length === 0) {
    return "Tetap waspada terhadap perubahan cuaca dan jaga kesehatan.";
  }

  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

export default getHealthRecommendation;
