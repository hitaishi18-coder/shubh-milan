import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Matrimonial Profile | Shubh Milan Amritsar",
  description:
    "Register your matrimonial profile with Shubh Milan in Amritsar. Complete our secure form to connect with verified and compatible marriage matches.",
};

export default function Register() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
      
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column - Trust & Information (Sticky on Desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Take the first step
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-main mb-6 leading-tight">
              Register Your Profile
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Complete this confidential form to join our verified network. Our expert matchmakers in Amritsar will personally review your details to find the most compatible matches for your family.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 text-2xl shadow-sm">
                🔒
              </div>
              <div>
                <h3 className="text-xl font-bold text-main mb-1">100% Confidential</h3>
                <p className="text-muted leading-relaxed">Your details and photos are never made public. We share them only with manually approved matches.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 text-2xl shadow-sm">
                🛡️
              </div>
              <div>
                <h3 className="text-xl font-bold text-main mb-1">Family Verified</h3>
                <p className="text-muted leading-relaxed">Every profile undergoes a strict manual verification process to ensure complete authenticity and trust.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 text-2xl shadow-sm">
                🤝
              </div>
              <div>
                <h3 className="text-xl font-bold text-main mb-1">Personal Guidance</h3>
                <p className="text-muted leading-relaxed">We don&apos;t rely on algorithms. We personally understand your family&apos;s values to find the perfect alliance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - The Embedded Google Form */}
        <div className="lg:col-span-7 w-full bg-surface rounded-[2.5rem] p-3 md:p-6 shadow-sm border border-[#EBE9E1]">
          <div className="rounded-[1.5rem] overflow-hidden bg-white">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScredwKGkJxE_TCukto8Yj9E0QwveR9s3EvR1Yk6niKMY38tg/viewform?embedded=true"
              width="100%"
              height="1100"
              style={{ border: "0" }}
              loading="lazy"
              title="Shubh Milan Registration Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>

      </div>

    </div>
  );
}