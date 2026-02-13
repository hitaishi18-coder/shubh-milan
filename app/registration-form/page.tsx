import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrimonial Registration Form | Shubh Milan Amritsar",
  description:
    "Complete the matrimonial registration form to connect with trusted and verified marriage profiles in Amritsar.",
};

export default function RegistrationForm() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-rose-800">
          Matrimonial Registration Form
        </h1>

        <p className="text-gray-700 mt-4">
          Please complete the form below. Our team will contact you shortly.
        </p>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-xl border bg-white">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdHDfM4t47hrqY4d5vxAubM_UA6sZLbjTmHjg60r4MhySI3vw/viewform?embedded=true"
          width="100%"
          height="900"
          style={{ border: "0" }}
          loading="lazy"
        >
          Loading…
        </iframe>
      </div>

    </div>
  );
}
