import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | Shubh Milan Matrimony Amritsar",
  description:
    "Read real success stories from couples matched by Shubh Milan, a trusted matrimonial service in Amritsar.",
};

export default function SuccessStories() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-main mb-6">
          Stories of Togetherness
        </h1>
        <p className="text-muted text-lg mb-12 max-w-2xl mx-auto">
          Every successful match strengthens our belief in trust, compatibility, and family values. Here are a few words from the families we&apos;ve brought together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-surface rounded-[2.5rem] p-10 hover:bg-surface-hover transition-colors relative">
          <span className="text-6xl text-accent absolute top-6 right-8 opacity-50 font-serif">&quot;</span>
          <h2 className="text-2xl font-bold text-main mb-4 relative z-10">
            Rohit & Priya
          </h2>
          <p className="text-muted text-lg leading-relaxed relative z-10">
            &quot;Shubh Milan guided our families with incredible patience and transparency. They didn&apos;t just look at basic criteria, they really understood our family&apos;s vibe.&quot;
          </p>
        </div>

        <div className="bg-surface rounded-[2.5rem] p-10 hover:bg-surface-hover transition-colors relative">
          <span className="text-6xl text-accent absolute top-6 right-8 opacity-50 font-serif">&quot;</span>
          <h2 className="text-2xl font-bold text-main mb-4 relative z-10">
            Aman & Simran
          </h2>
          <p className="text-muted text-lg leading-relaxed relative z-10">
            &quot;The manual verification process gave our parents so much confidence. We felt safe and respected throughout the entire matchmaking journey.&quot;
          </p>
        </div>

      </div>

    </div>
  );
}