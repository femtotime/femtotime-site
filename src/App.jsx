import { useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { Gallery } from './components/Gallery';
import { Calendar } from './components/Calendar';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-gray-800 font-serif">
      <header className="bg-white border-b border-gray-200 p-10 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-blue-800 drop-shadow-md">Sunlit Elegance Escape</h1>
        <p className="mt-4 text-lg text-gray-500">A stylish apartment in the heart of Varna, Nikola Vaptsarov 7</p>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-12 space-y-16">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Photo Gallery</h2>
          <Gallery />
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Summary</h2>
          <p className="text-gray-700 text-lg">
            Sunlit Elegance Escape Apartment offers modern air-conditioned accommodation with a balcony in Varna City...
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Location</h2>
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Nikola+Vaptsarov+7,+Varna,+Bulgaria&output=embed"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow"
          ></iframe>
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Availability Calendar</h2>
          <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
        </section>

        <section className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">Book Your Stay</h2>
          <ContactForm selectedDate={selectedDate} />
        </section>
      </main>

      <footer className="mt-16 p-6 text-center text-sm text-gray-400">
        &copy; 2025 Sunlit Elegance Escape. All rights reserved.
      </footer>
    </div>
  );
}