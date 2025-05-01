"use client";
import Navbar from "@/components/Navbar";

const HealthPage = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Health & Activities</h1>
        <p className="text-gray-600">
          Berikut adalah rekomendasi kesehatan berdasarkan cuaca dan kualitas udara saat ini:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Jika cuaca cerah, gunakan tabir surya dan tetap terhidrasi.</li>
          <li>Saat hujan, hindari genangan air dan bawa payung.</li>
          <li>Kualitas udara buruk? Gunakan masker dan batasi aktivitas luar ruangan.</li>
          <li>Suhu dingin? Gunakan pakaian hangat dan hindari mandi air dingin terlalu sering.</li>
          <li>Untuk penderita asma, selalu bawa inhaler saat bepergian.</li>
          <li>Perbanyak konsumsi air putih saat cuaca panas dan kering.</li>
        </ul>

        <p className="text-sm text-gray-500">
          Rekomendasi ini bersifat umum. Konsultasikan dengan tenaga medis untuk kebutuhan spesifik.
        </p>
      </main>
    </>
  );
};

export default HealthPage;
