// Root App.jsx with Tailwind styling and multi-section layout
import { useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { Gallery } from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-gray-800 font-sans">
      <header className="bg-white border-b border-gray-200 p-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Sunlit Elegance Escape</h1>
        <p className="mt-2 text-gray-500">A stylish apartment in the heart of Varna, Nikola Vaptsarov 7</p>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-12 space-y-16">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Photo Gallery</h2>
          <p className="text-gray-600">Explore our space through beautiful, high-resolution images of every room.</p>
          <Gallery />
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Summary</h2>
          <p className="text-gray-700 text-lg">
            Sunlit Elegance Escape Apartment offers modern air-conditioned accommodation with a balcony in Varna City. Located near the central beach and major attractions, the apartment features a lift, free WiFi, a fully equipped kitchen, and tasteful interior design perfect for short or extended stays.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Location</h2>
          <iframe
            title="Map to Sunlit Elegance Escape"
            src="https://www.google.com/maps?q=Nikola+Vaptsarov+7,+Varna,+Bulgaria&output=embed"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow"
          ></iframe>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Availability Calendar</h2>
          <p className="text-gray-600 text-sm">Booking calendar integration coming soon. For now, please send a request to check availability.</p>
          <div className="h-80 bg-gray-100 border border-dashed rounded-lg flex items-center justify-center text-gray-400">
            Calendar placeholder
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Rates for May</h2>
          <p className="text-lg">
            <span className="block">Weekdays: <span className="font-medium">130 BGN/night</span></span>
            <span className="block">Weekends (Friday–Sunday): <span className="font-medium">150 BGN/night</span></span>
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Guest Reviews</h2>
          <ul className="space-y-2">
            <li className="border-l-4 border-blue-500 pl-4 text-sm">“Modern and cozy. Great for couples and very clean.” – Sylvia</li>
            <li className="border-l-4 border-blue-500 pl-4 text-sm">“Excellent location, quiet area, great value.” – Petar</li>
            <li className="border-l-4 border-blue-500 pl-4 text-sm">“Clean, bright and fully equipped. Would definitely return!” – Velina</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Book Your Stay</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="mt-16 p-6 text-center text-sm text-gray-400">
        &copy; 2025 Sunlit Elegance Escape. All rights reserved.
      </footer>
    </div>
  );
}