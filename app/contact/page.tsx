import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Shubh Milan | Marriage Bureau in Amritsar",
  description:
    "Contact Shubh Milan, a trusted marriage bureau in Amritsar for matrimonial registration and love-to-arrange consultation.",
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-rose-800 mb-8">
        Contact Shubh Milan – Marriage Bureau in Amritsar
      </h1>

      <p className="text-gray-700 mb-10">
        For matrimonial registration, profile verification or love-to-arrange
        consultation in Amritsar, feel free to contact us.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-rose-700 mb-4">
            Contact Details
          </h2>

          <p className="text-gray-600 mb-2">
            📞 Phone: +91-XXXXXXXXXX
          </p>

          <p className="text-gray-600 mb-2">
            💬 WhatsApp: +91-XXXXXXXXXX
          </p>

          <p className="text-gray-600 mb-2">
            📧 Email: info@shubhmilan.com
          </p>

          <p className="text-gray-600">
            📍 Location: Amritsar, Punjab
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-rose-700 mb-4">
            Working Hours
          </h2>

          <p className="text-gray-600 mb-2">
            Monday – Saturday
          </p>

          <p className="text-gray-600 mb-2">
            10:00 AM – 7:00 PM
          </p>

          <p className="text-gray-600">
            Sunday: By Appointment Only
          </p>
        </div>

      </div>

    </div>
  );
}
