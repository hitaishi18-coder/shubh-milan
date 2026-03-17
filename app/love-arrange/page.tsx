import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Love to Arrange Marriage | Shubh Milan Amritsar",
  description:
    "Shubh Milan helps couples in Amritsar convert love marriages into family-approved arranged marriages with confidential counselling.",
};

export default function LoveArrange() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-main mb-6">
          Love to Arrange Marriage
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
          Sometimes relationships begin with mutual understanding, but families may need guidance. We help couples respectfully present their relationship to families and guide them toward a traditional marriage.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div className="p-10 bg-surface rounded-[2.5rem]">
          <h2 className="text-2xl font-bold text-main mb-6">
            What We Offer
          </h2>
          <ul className="space-y-4 text-lg text-muted">
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span> Confidential Consultation
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span> Family Counselling & Mediation
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span> Respectful Communication
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span> Seamless Traditional Process
            </li>
          </ul>
        </div>

        <div className="p-10 bg-primary rounded-[2.5rem] text-center text-white">
          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
            🤝
          </div>
          <h2 className="text-2xl font-bold mb-4">
            Need Guidance?
          </h2>
          <p className="text-[#D1D9D3] mb-8 text-lg">
            We ensure complete privacy and handle every family situation with the utmost respect and care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F9F8F6] text-primary px-8 py-4 rounded-full font-bold hover:bg-surface transition-colors"
          >
            Book a Confidential Consultation
          </Link>
        </div>

      </div>
    </div>
  );
}