import React from "react";

export default function FavoriPaneli({ favoriler, kitaplar, onFavoriKaldir }) {
  const favoriKitaplar = kitaplar.filter((kitap) => favoriler.includes(kitap.id));

  return (
    <div className="bg-orange-200 p-4 rounded-lg shadow border border-gray-200 text-gray-900">
      <h2 className="text-2xl font-bold mb-4">
        Favoriler ({favoriler.length})
      </h2>
      {favoriKitaplar.length > 0 ? (
        <ul className="space-y-2">
          {favoriKitaplar.map((kitap) => (
            <li
              key={kitap.id}
              className="flex justify-between items-center bg-orange-100 p-2 rounded"
            >
              <span>{kitap.baslik}</span>
              <button
                onClick={() => onFavoriKaldir(kitap.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700">Henüz favori kitabınız yok.</p>
      )}
    </div>
  );
}
