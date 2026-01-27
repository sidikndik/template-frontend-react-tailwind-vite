import React from 'react';

const LoaderModal = ({ isOpen, text = "Loading..." }) => {
  // Jika tidak open, jangan render apa-apa (kembalikan null)
  if (!isOpen) return null;

  return (
    // 1. OVERLAY: Layar hitam transparan yang menutupi seluruh halaman
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity">
      
      {/* 2. DIALOG BOX: Kotak putih di tengah */}
      <div className="bg-white rounded-xl shadow-2xl px-8 py-6 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
        
        {/* 3. SPINNER: Dibuat murni dengan CSS Border */}
        {/* - border-4: Ketebalan garis
            - border-indigo-100: Warna jalur (track) pudar
            - border-t-indigo-600: Warna bagian atas (yang berputar) lebih gelap
            - rounded-full: Membuat kotak jadi lingkaran
            - animate-spin: Animasi putar bawaan Tailwind
        */}
        <div className="w-12 h-12 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
        
        {/* Teks Loading */}
        <p className="text-gray-700 font-medium text-sm animate-pulse">
          {text}
        </p>
      </div>
      
    </div>
  );
};

export default LoaderModal;