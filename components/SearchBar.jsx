"use client";
import { useState } from "react";

const SearchBar = ({ onSearch, onUseCurrentLocation }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3 mb-6">
      <div className="flex w-full space-x-2">
        <input
          type="text"
          placeholder="Cari kota..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Cari
        </button>
      </div>
      <button
        onClick={onUseCurrentLocation}
        className="text-blue-500 underline hover:text-blue-600 transition"
      >
        Gunakan Lokasi Saya
      </button>
    </div>
  );
};

export default SearchBar;
