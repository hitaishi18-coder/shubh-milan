import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrimonial Registration Form | Shubh Milan Amritsar",
  description:
    "Complete the matrimonial registration form to connect with trusted and verified marriage profiles in Amritsar.",
};

export default function RegistrationForm() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-main mb-4">
          Profile Registration
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Please complete the form below accurately. All information is kept strictly confidential and is only used to find your perfect match.
        </p>
      </div>

      {/* Wrapping the form in a soft Material 3 tonal container */}
      <div className="w-full bg-surface rounded-[2.5rem] p-4 md:p-8">
        <div className="rounded-3xl overflow-hidden bg-white">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScredwKGkJxE_TCukto8Yj9E0QwveR9s3EvR1Yk6niKMY38tg/viewform?embedded=true"
            width="100%"
            height="900"
            style={{ border: "0" }}
            loading="lazy"
            title="Registration Form"
          >
            Loading…
          </iframe>
        </div>
      </div>

    </div>
  );
}