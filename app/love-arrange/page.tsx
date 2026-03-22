import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, FadeInScale, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Love to Arrange Marriage | Shubh Milan Amritsar",
  description:
    "Shubh Milan helps couples in Amritsar convert love marriages into family-approved arranged marriages with confidential counselling.",
};

export default function LoveArrange() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
        <FadeIn className="lg:w-1/2 w-full">
           <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/images/love_arrange.png" 
                alt="Modern Indian couple getting to know each other" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" 
              />
           </div>
        </FadeIn>
        
        <FadeIn delay={0.2} className="lg:w-1/2 text-left space-y-6">
           <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
             Bridge the Gap
           </span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-6 leading-tight">
             Love to Arrange Marriage
           </h1>
           <p className="text-muted text-lg leading-relaxed max-w-xl">
             Sometimes relationships begin with a natural connection, but approaching families with the idea can be daunting. We understand the delicate balance between modern relationships and traditional family expectations.
           </p>
           <p className="text-muted text-lg leading-relaxed max-w-xl">
             Our expert matchmakers step in to guide couples on how to respectfully present their relationship to their parents. We help navigate conversations, address concerns, and smoothly transition a love story into a beautiful, family-approved arranged marriage.
           </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">

        <StaggerContainer className="p-12 bg-surface rounded-[3rem] shadow-sm">
          <h2 className="text-3xl font-bold text-main mb-8">
            Our Loving Approach
          </h2>
          <ul className="space-y-6 text-lg text-muted">
            <StaggerItem className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#EBE9E1] flex items-center justify-center text-primary shrink-0 mt-1">✓</div> 
              <div>
                <strong className="block text-main">Confidential Consultation</strong>
                We provide a safe, non-judgmental space for you to share your story.
              </div>
            </StaggerItem>
            <StaggerItem className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#EBE9E1] flex items-center justify-center text-primary shrink-0 mt-1">✓</div> 
              <div>
                <strong className="block text-main">Family Counselling & Mediation</strong>
                We mediate discussions to ensure everyone feels heard and respected.
              </div>
            </StaggerItem>
            <StaggerItem className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#EBE9E1] flex items-center justify-center text-primary shrink-0 mt-1">✓</div> 
              <div>
                <strong className="block text-main">Respectful Communication</strong>
                We help frame the narrative in a way that honors your parents&apos; values.
              </div>
            </StaggerItem>
            <StaggerItem className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#EBE9E1] flex items-center justify-center text-primary shrink-0 mt-1">✓</div> 
              <div>
                <strong className="block text-main">Seamless Traditional Process</strong>
                We coordinate the formal meetings as normally done in arranged setups.
              </div>
            </StaggerItem>
          </ul>
        </StaggerContainer>

        <FadeInScale delay={0.3}>
          <div className="p-12 bg-primary rounded-[3rem] text-center text-white shadow-xl relative overflow-hidden group h-full flex flex-col justify-center min-h-[450px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="w-20 h-20 bg-[#5C7060]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mx-auto mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
              🤝
            </div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">
              Need Guidance?
            </h2>
            <p className="text-[#D1D9D3] mb-10 text-xl leading-relaxed relative z-10 max-w-sm mx-auto">
              We ensure complete privacy and handle your delicate situation with the utmost respect, empathy, and care.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#F9F8F6] text-[#2A362D] px-10 py-5 rounded-full font-bold hover:bg-[#EBE9E1] transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl relative z-10 text-lg"
            >
              Book a Confidential Consultation
            </Link>
          </div>
        </FadeInScale>

      </div>
    </div>
  );
}