import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Success Stories | Shubh Milan Matrimony Amritsar",
  description:
    "Read real success stories from couples matched by Shubh Milan, a trusted matrimonial service in Amritsar.",
};

export default function SuccessStories() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <div className="flex flex-col lg:flex-row gap-16 items-center mb-20 text-center lg:text-left">
        <FadeIn className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
           <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
             Blessed Unions
           </span>
           <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-main mb-6 leading-tight">
             Stories of <br/><span className="text-[#4A5D4E]">Togetherness</span>
           </h1>
           <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
             Every successful match strengthens our belief in trust, compatibility, and family values. We measure our success not by numbers, but by the lifelong happiness of the couples we bring together. Here are a few words from the families whose beautiful journeys began at Shubh Milan.
           </p>
        </FadeIn>

        <FadeIn delay={0.2} className="w-full lg:w-1/2 order-1 lg:order-2">
           <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/images/success_story.png" 
                alt="Happy returning newlywed couple" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out" 
              />
           </div>
        </FadeIn>
      </div>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <StaggerItem className="bg-surface rounded-[2.5rem] p-10 hover:bg-surface-hover hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl relative group">
          <span className="text-8xl text-[#4A5D4E] absolute -top-4 right-6 opacity-[0.07] font-serif group-hover:scale-110 transition-transform duration-500">&quot;</span>
          <h2 className="text-2xl font-bold text-main mb-2 relative z-10">
            Rohit & Priya
          </h2>
          <p className="text-sm font-semibold text-primary mb-6">Married in 2025</p>
          <p className="text-muted text-lg leading-relaxed relative z-10 italic">
            &quot;Shubh Milan guided our families with incredible patience and transparency. They didn&apos;t just look at basic criteria like caste or job; they really took the time to understand our family&apos;s vibe and what kind of daughter-in-law would fit in perfectly.&quot;
          </p>
        </StaggerItem>

        <StaggerItem className="bg-[#4A5D4E] rounded-[2.5rem] p-10 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl relative text-white group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
          <span className="text-8xl text-white absolute -top-4 right-6 opacity-10 font-serif group-hover:scale-110 transition-transform duration-500">&quot;</span>
          <h2 className="text-2xl font-bold mb-2 relative z-10">
            Aman & Simran
          </h2>
          <p className="text-sm font-semibold text-[#D1D9D3] mb-6">Married in 2024</p>
          <p className="text-[#F9F8F6] text-lg leading-relaxed relative z-10 italic">
            &quot;The manual verification process gave our parents so much confidence. We felt safe and respected throughout the entire matchmaking journey. Finding someone as matching in thoughts as Aman was something only a human matchmaker could do!&quot;
          </p>
        </StaggerItem>

        <StaggerItem className="bg-surface rounded-[2.5rem] p-10 hover:bg-surface-hover hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl relative group">
          <span className="text-8xl text-[#4A5D4E] absolute -top-4 right-6 opacity-[0.07] font-serif group-hover:scale-110 transition-transform duration-500">&quot;</span>
          <h2 className="text-2xl font-bold text-main mb-2 relative z-10">
            Karan & Neha
          </h2>
          <p className="text-sm font-semibold text-primary mb-6">Married in 2025</p>
          <p className="text-muted text-lg leading-relaxed relative z-10 italic">
            &quot;We had given up on finding someone within our specific community who also had a modern outlook. Shubh Milan surprised us within just three weeks with a profile that felt like it was custom-made for our family.&quot;
          </p>
        </StaggerItem>

      </StaggerContainer>

    </div>
  );
}