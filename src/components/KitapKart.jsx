import React from "react";

export default function KitapKart({ kitap, isFavori, onFavoriToggle }) {
  return (
    <div className="bg-orange-400 p-4 rounded-lg shadow border border-gray-200 text-gray-900 flex flex-col h-full">
      <div className="flex-grow">
        <h3 className="text-lg font-bold">{kitap.baslik}</h3>
        <p className="text-sm text-gray-800">
          {kitap.yazar} - {kitap.kategori}
        </p>
      </div>
      <button
        onClick={() => onFavoriToggle(kitap.id)}
        className={`mt-4 w-full flex items-center justify-center p-2 rounded-md transition-colors ${
          isFavori
            ? "bg-yellow-400 hover:bg-yellow-500 text-white"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
      >
        <span className="mr-2">☆</span>
        {isFavori ? "Favoriden Çıkar" : "Favori Ekle"}
      </button>
    </div>
  );
}
