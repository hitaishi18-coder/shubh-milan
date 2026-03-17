import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

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
          <FadeIn>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
              Take the first step
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-6 leading-tight">
              Begin Your <br/><span className="text-[#4A5D4E]">Journey Here</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Complete this confidential form to join our verified network. Our expert matchmakers in Amritsar will personally review your details to find the most compatible matches for your family.
            </p>
            
            <div className="relative h-[250px] w-full rounded-[2rem] overflow-hidden shadow-md mb-8">
              <Image 
                src="/images/family_meeting.png" 
                alt="Families meeting warmly" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            <StaggerItem className="flex items-start gap-5 p-5 bg-surface rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 text-2xl shadow-sm">
                🔒
              </div>
              <div>
                <h3 className="text-xl font-bold text-main mb-1">100% Confidential</h3>
                <p className="text-muted leading-relaxed">Your details and photos are never made public. We share them only with manually approved matches.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem className="flex items-start gap-5 p-5 bg-surface rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 text-2xl shadow-sm">
                🛡️
              </div>
              <div>
                <h3 className="text-xl font-bold text-main mb-1">Family Verified</h3>
                <p className="text-muted leading-relaxed">Every profile undergoes a strict manual verification process to ensure complete authenticity and trust.</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-start gap-5 p-5 bg-[#4A5D4E] rounded-[2rem] text-white hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="w-14 h-14 bg-[#5C7060]/80 rounded-2xl flex items-center justify-center text-white shrink-0 text-2xl shadow-sm">
                🤝
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Personal Guidance</h3>
                <p className="text-[#D1D9D3] leading-relaxed">We don&apos;t rely on algorithms. We personally understand your family&apos;s values to find the perfect alliance.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right Column - The Embedded Google Form */}
        <FadeIn delay={0.3} className="lg:col-span-7 w-full bg-surface rounded-[3rem] p-3 md:p-6 shadow-sm border border-[#EBE9E1]">
          <div className="rounded-[2.5rem] overflow-hidden bg-white shadow-inner">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdHDfM4t47hrqY4d5vxAubM_UA6sZLbjTmHjg60r4MhySI3vw/viewform?embedded=true"
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
        </FadeIn>

      </div>

    </div>
  );
}