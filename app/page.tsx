import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shubh Milan | Trusted Matrimonial Service in Amritsar",
  description:
    "Shubh Milan is a trusted matrimonial service in Amritsar helping Punjabi families find verified marriage matches with tradition and personal guidance.",
};

export default function Home() {
  return (
    // Let the global CSS handle the background so it is seamless
    <main className="min-h-screen font-sans pb-16">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden">
        <div className="bg-[#EBE9E1] text-[#4A5D4E] px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-8 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4A5D4E]"></span>
          Trusted in Amritsar
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#D6CFC7] tracking-tight leading-tight max-w-4xl">
          Meaningful connections, <br className="hidden md:block" />
          <span className="text-[#4A5D4E]">beautiful beginnings.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[#595959] max-w-2xl leading-relaxed">
          A modern approach to traditional matchmaking. We help families find verified, highly compatible life partners in a safe, confidential environment.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Link
            href="/register"
            className="bg-[#4A5D4E] text-white px-9 py-4 rounded-full hover:bg-[#3A493D] transition-colors text-lg font-medium flex items-center justify-center gap-2"
          >
            Create Your Profile
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <Link
            href="/contact"
            className="bg-[#EBE9E1] text-[#4A5D4E] px-9 py-4 rounded-full hover:bg-[#DFDDD3] transition-colors text-lg font-medium flex items-center justify-center"
          >
            Speak to a Matchmaker
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]">
            The Shubh Milan Promise
          </h2>
          <p className="mt-4 text-[#595959] text-lg">Guided by experts, built on trust.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-10 bg-[#EBE9E1] rounded-[2.5rem] transition-colors hover:bg-[#DFDDD3] group">
            <div className="w-16 h-16 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] text-2xl mb-8 group-hover:scale-105 transition-transform duration-300">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
              Verified Authenticity
            </h3>
            <p className="text-[#595959] leading-relaxed text-lg">
              Every profile undergoes strict manual verification. We ensure complete transparency and peace of mind for your family.
            </p>
          </div>

          <div className="p-10 bg-[#4A5D4E] rounded-[2.5rem] text-white group">
            <div className="w-16 h-16 bg-[#5C7060] rounded-full flex items-center justify-center text-white text-2xl mb-8 group-hover:scale-105 transition-transform duration-300">
              🤝
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Personalized Curation
            </h3>
            <p className="text-[#D1D9D3] leading-relaxed text-lg">
              Beyond basic filters, our dedicated matchmakers understand your family&apos;s values to suggest deeply compatible alliances.
            </p>
          </div>

          <div className="p-10 bg-[#EBE9E1] rounded-[2.5rem] transition-colors hover:bg-[#DFDDD3] group">
            <div className="w-16 h-16 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#4A5D4E] text-2xl mb-8 group-hover:scale-105 transition-transform duration-300">
              🔒
            </div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-4">
              Discreet & Private
            </h3>
            <p className="text-[#595959] leading-relaxed text-lg">
              Your photographs and sensitive details are never public. You have complete control over who views your family&apos;s information.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Fixed High Contrast */}
      <section className="mx-6 max-w-6xl md:mx-auto bg-[#2A362D] rounded-[3rem] px-8 py-20 text-center relative overflow-hidden flex flex-col items-center shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F9F8F6] mb-6 max-w-2xl">
          Ready to find the perfect addition to your family?
        </h2>
        <p className="text-[#A1ACA4] mb-10 max-w-xl text-lg">
          Join our exclusive network of families in Amritsar. Registration is simple, secure, and completely confidential.
        </p>
        <Link
          href="/register"
          className="bg-[#D9CDBF] text-[#2A362D] px-10 py-4 rounded-full hover:bg-[#CABAAB] transition-colors text-lg font-bold shadow-md hover:-translate-y-1"
        >
          Begin Registration
        </Link>
      </section>
      
    </main>
  );
}