import { useState } from 'react';
import { format } from 'date-fns';

export function ContactForm({ selectedDate }) {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div className="p-4 bg-green-100 text-green-800 rounded">
      <h3 className="text-xl font-semibold">Thank you!</h3>
      <p>Your booking inquiry has been sent. We'll get back to you shortly.</p>
    </div>
  ) : (
    <form
      name="booking"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-4"
      onSubmit={() => setSubmitted(true)}
    >
      <input type="hidden" name="form-name" value="booking" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Preferred Date</label>
        <input
          type="text"
          name="date"
          value={selectedDate ? format(selectedDate, 'PPP') : ''}
          readOnly
          className="w-full border rounded px-3 py-2 bg-gray-100"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send Booking Request
      </button>
    </form>
  );
}