"use client";
import Navbar from "@/components/Navbar";

const EducationPage = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Education</h1>
        <p className="text-gray-600">
          Pelajari lebih lanjut tentang dampak perubahan iklim dan polusi terhadap kesehatan dan lingkungan:
        </p>

        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-blue-600">🌍 Global Warming</h2>
            <p className="text-gray-700">
              Pemanasan global menyebabkan kenaikan suhu bumi, mencairnya es kutub, dan cuaca ekstrem.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600">🌫️ Polusi Udara</h2>
            <p className="text-gray-700">
              Partikel seperti PM2.5 dan NO₂ berbahaya bagi paru-paru dan jantung, terutama pada anak-anak dan lansia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600">💧 Dampak Terhadap Air</h2>
            <p className="text-gray-700">
              Perubahan iklim memengaruhi ketersediaan air bersih dan dapat menyebabkan kekeringan atau banjir.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600">🌱 Apa yang Bisa Kita Lakukan?</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Kurangi penggunaan plastik sekali pakai.</li>
              <li>Gunakan transportasi umum atau kendaraan ramah lingkungan.</li>
              <li>Hemat energi di rumah dan kantor.</li>
              <li>Dukung kebijakan pelestarian lingkungan.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default EducationPage;
