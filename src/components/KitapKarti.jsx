import React from "react";

const StarIcon = ({ className, filled = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function KitapKarti({ kitap, favorideMi, onFavoriToggle }) {
  const { baslik, yazar, kategori } = kitap;
  const butonStili = favorideMi
    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{baslik}</h3>
        <p className="text-gray-600 text-sm">
          {yazar} - <span className="font-medium text-gray-800">{kategori}</span>
        </p>
      </div>
      <button
        onClick={() => onFavoriToggle(kitap.id)}
        className={`mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${butonStili}`}
      >
        <StarIcon className="inline-block" filled={favorideMi} />
        {favorideMi ? "Favoride" : "Favori Ekle"}
      </button>
    </div>
  );
}
