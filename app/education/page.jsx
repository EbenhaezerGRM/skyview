"use client";

import Navbar from "@/components/Navbar";
import {
  FaSnowflake,
  FaCloudRain,
  FaSmog,
  FaWind,
  FaCloud,
  FaCloudSun,
  FaMoon,
  FaSun,
  FaRegMoon,
  FaTemperatureHigh,
} from "react-icons/fa";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { BsSun, BsCloudSun } from "react-icons/bs";

const IndicatorCard = ({ title, icon, description }) => (
  <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-xl transition transform hover:-translate-y-1">
    <div className="flex items-center gap-3 mb-4 text-blue-600 text-3xl">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

export default function EducationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 max-w-7xl mx-auto px-6 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          🌍 Edukasi Lengkap Cuaca, Udara & Lingkungan
        </h1>

        <section className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            Pelajari indikator cuaca, kualitas udara, perubahan iklim, bencana alam, dan solusi inovatif untuk melindungi bumi.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <IndicatorCard title="PM2.5" icon={<FaSmog />} description="Partikel mikroskopis dari asap & pembakaran, berbahaya bagi paru-paru." />
          <IndicatorCard title="PM10" icon={<FaSmog />} description="Debu kasar dari jalan, konstruksi, & tanah kering." />
          <IndicatorCard title="AQI" icon={<BsCloudSun />} description="Indeks keseluruhan kualitas udara, dari baik hingga berbahaya." />
          <IndicatorCard title="Ozon (O₃)" icon={<FaSmog />} description="Gas pelindung di stratosfer, berbahaya di permukaan tanah." />
          <IndicatorCard title="CO (Karbon Monoksida)" icon={<FaSmog />} description="Gas beracun, tidak berwarna & tidak berbau, dari kendaraan & pembakaran." />
          <IndicatorCard title="NO₂ (Nitrogen Dioksida)" icon={<FaSmog />} description="Gas dari mesin diesel & industri, memicu iritasi paru-paru." />
          <IndicatorCard title="SO₂ (Sulfur Dioksida)" icon={<FaSmog />} description="Dari pembakaran batu bara, pemicu hujan asam & gangguan napas." />
          <IndicatorCard title="Suhu" icon={<FaTemperatureHigh />} description="Mengukur panas dinginnya udara, penting untuk kesehatan & pertanian." />
          <IndicatorCard title="Kelembapan" icon={<WiHumidity />} description="Uap air di udara, memengaruhi kenyamanan & cuaca." />
          <IndicatorCard title="Angin" icon={<WiStrongWind />} description="Menggerakkan awan, mengatur suhu, & memengaruhi iklim lokal." />
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">🌤️ Ikon Cuaca & Artinya</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><FaSnowflake className="inline" /> Salju → Cuaca dingin ekstrem, berisiko longsor di daerah pegunungan.</li>
            <li><FaCloudRain className="inline" /> Hujan → Waspadai banjir, periksa atap & saluran air.</li>
            <li><FaSmog className="inline" /> Kabut asap → Polusi berat, hindari olahraga luar ruangan.</li>
            <li><FaWind className="inline" /> Angin → Potensi badai lokal, amankan barang di luar rumah.</li>
            <li><FaCloud className="inline" /> Berawan → Suhu lebih sejuk, awan tebal bisa menandakan hujan.</li>
            <li><FaCloudSun className="inline" /> Cerah berawan → Campuran cuaca, tetap siaga perubahan mendadak.</li>
            <li><FaSun className="inline" /> Terik matahari → Lindungi kulit, perbanyak minum.</li>
            <li><FaMoon className="inline" /> Malam cerah → Suhu turun, udara kering.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">🧪 Sains di Balik Cuaca</h2>
          <p className="text-gray-700 mb-2">
            Cuaca terjadi karena interaksi atmosfer, matahari, air, dan daratan. Matahari memanaskan bumi tidak merata, menciptakan pola angin, awan, dan hujan.
          </p>
          <p className="text-gray-700">
            Hutan & laut menyerap karbon, menjaga suhu global, dan menghasilkan hujan. Sayangnya, deforestasi & polusi laut mengganggu keseimbangan ini.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">🌪️ Fenomena Cuaca Ekstrem</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Badai Tropis:</strong> Terbentuk di atas lautan hangat, membawa hujan lebat & angin kencang.</li>
            <li><strong>Gelombang Panas:</strong> Lonjakan suhu ekstrem, berisiko fatal tanpa hidrasi & pendinginan.</li>
            <li><strong>El Niño & La Niña:</strong> Gangguan iklim global yang memengaruhi pola hujan & suhu di seluruh dunia.</li>
            <li><strong>Hujan Es:</strong> Butiran es jatuh dari awan badai, bisa merusak tanaman & bangunan.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">🌐 Globalisasi, Perubahan Iklim & Inovasi</h2>
          <p className="text-gray-700 mb-2">
            Aktivitas manusia meningkatkan gas rumah kaca, mempercepat pemanasan global. Namun, inovasi seperti kendaraan listrik, energi surya, & pengelolaan sampah bisa membalikkan tren ini.
          </p>
          <p className="text-gray-700">
            Pemerintah, bisnis, & individu perlu bekerja sama agar globalisasi membawa manfaat tanpa merusak planet.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">💡 Tips Aksi Individu & Komunitas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Gunakan transportasi publik & sepeda.</li>
            <li>Kurangi makanan olahan & daging merah.</li>
            <li>Hemat air & listrik di rumah.</li>
            <li>Ikut kegiatan bersih-bersih lingkungan.</li>
            <li>Ajarkan anak-anak mencintai alam.</li>
          </ul>
        </section>
        
        <section className="bg-gradient-to-r from-green-100 to-green-200 p-8 rounded-2xl shadow-lg mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">🌿 Bersama Menjaga Bumi</h2>
          <p className="text-gray-700">
            Setiap langkah kecilmu berarti. Dari hemat energi hingga menanam pohon, kita semua punya peran menjaga bumi agar tetap layak huni untuk generasi mendatang.
          </p>
        </section>

        <footer className="text-center text-gray-500 text-sm pt-8 border-t">
          © 2025 SKYWISE - All rights reserved.
        </footer>
      </main>
    </>
  );S
}
