import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | Shubh Milan Matrimony Amritsar",
  description:
    "Read real success stories from couples matched by Shubh Milan, a trusted matrimonial service in Amritsar.",
};

export default function SuccessStories() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-rose-800 mb-10 text-center">
        Matrimonial Success Stories
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Every successful match strengthens our belief in
        trust, compatibility and family values.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="border rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-rose-700 mb-4">
            Rohit & Priya
          </h2>
          <p className="text-gray-600">
            Shubh Milan guided our families with patience and transparency.
          </p>
        </div>

        <div className="border rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-rose-700 mb-4">
            Aman & Simran
          </h2>
          <p className="text-gray-600">
            The verification process gave our families confidence.
          </p>
        </div>

      </div>

    </div>
  );
}
