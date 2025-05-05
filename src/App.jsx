import { useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { Gallery } from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md">
        <h1 className="text-3xl font-bold">Sunlit Elegance Escape</h1>
        <p className="text-gray-600">Your perfect getaway in Plovdiv</p>
      </header>

      <main className="p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <Gallery />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Rates for May</h2>
          <p className="text-lg mb-4">
            Weekdays: <span className="font-medium">130 BGN/night</span><br />
            Weekends (Friday to Sunday): <span className="font-medium">150 BGN/night</span>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500">
        &copy; 2025 Sunlit Elegance Escape. All rights reserved.
      </footer>
    </div>
  );
}