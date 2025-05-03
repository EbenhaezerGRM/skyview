"use client";
import { useState } from "react";

const SearchBar = ({ onSearch, onUseCurrentLocation, currentLocation }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity(""); 
    }
  };

  const handleUseCurrentLocation = async () => {
    await onUseCurrentLocation();
    setCity(""); 
  };

  return (
    <div className="flex flex-col items-center gap-6 mb-8 w-full px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row w-full max-w-4xl gap-4">
        <input
          type="text"
          placeholder="🔍 Cari kota atau lokasi..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 shadow-sm"
        />
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto px-5 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-md"
        >
          Cari
        </button>
        <button
          onClick={handleUseCurrentLocation}
          className="w-full sm:w-auto px-5 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors shadow-md"
        >
          Lokasi Saya
        </button>
      </div>
      
      {currentLocation && (
        <div className="text-sm text-gray-600 mt-2 text-center sm:text-left">
          Lokasi saat ini: <span className="font-semibold">{currentLocation}</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
