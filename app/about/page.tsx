import Image from "next/image";
import { FadeIn, FadeInScale, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">

      <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
        <FadeIn className="lg:w-1/2 w-full">
           <div className="relative h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/images/about_us.png" 
                alt="Shubh Milan office with an elegant matchmaker" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" 
              />
           </div>
        </FadeIn>
        
        <FadeIn delay={0.2} className="lg:w-1/2 text-left space-y-6">
           <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
             Our Story
           </span>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-main mb-6 leading-tight">
             About Shubh Milan
           </h1>
           <p className="text-muted text-lg leading-relaxed max-w-xl">
             Shubh Milan is a trusted family-run matrimonial service based in Amritsar. For years, we have been dedicated to helping families find suitable life partners with deep respect, tradition, and complete transparency.
           </p>
           <p className="text-muted text-lg leading-relaxed max-w-xl">
             We believe that a marriage is not just between two individuals, but the coming together of two families. Our team ensures that every match is carefully curated, balancing modern compatibility with timeless family values.
           </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-24">
        <StaggerItem className="p-10 bg-surface rounded-[2.5rem] hover:bg-surface-hover hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl group">
          <div className="w-16 h-16 bg-[#F9F8F6] rounded-full flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
            🎯
          </div>
          <h2 className="text-3xl font-bold text-main mb-4">
            Our Mission
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            To create meaningful matrimonial connections based on genuine compatibility, shared values, and deep family trust. We strive to be the bridge that softly brings families together, ensuring long-lasting and beautiful relationships.
          </p>
        </StaggerItem>

        <StaggerItem className="p-10 bg-primary text-white rounded-[2.5rem] hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
          <div className="w-16 h-16 bg-[#5C7060] rounded-full flex items-center justify-center text-white text-3xl mb-8 group-hover:scale-110 transition-transform duration-300 z-10 relative">
            ⭐
          </div>
          <h2 className="text-3xl font-bold mb-4 z-10 relative">
            Our Values
          </h2>
          <p className="text-[#D1D9D3] leading-relaxed text-lg z-10 relative">
            Transparency, uncompromised privacy, personal matchmaking guidance, and complete respect for Punjabi traditions. We treat your family&apos;s data with the highest level of confidentiality.
          </p>
        </StaggerItem>
      </StaggerContainer>

      <FadeInScale>
        <div className="bg-[#EBE9E1] rounded-[3rem] p-12 text-center shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-[#4A5D4E] mb-6">Come Visit Us</h3>
          <p className="text-[#595959] text-xl max-w-2xl mx-auto leading-relaxed">
            We invite you to our office for a warm cup of tea. Let&apos;s discuss what you&apos;re looking for in a partner and how we can help your family take this beautiful step forward.
          </p>
        </div>
      </FadeInScale>

    </div>
  );
}