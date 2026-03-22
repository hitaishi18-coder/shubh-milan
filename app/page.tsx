import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, FadeInScale, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Shubh Milan | Trusted Matrimonial Service in Amritsar",
  description:
    "Shubh Milan is a trusted matrimonial service in Amritsar helping Punjabi families find verified marriage matches with tradition and personal guidance.",
};

export default function Home() {
  return (
    // Let the global CSS handle the background so it is seamless
    <main className="min-h-screen font-sans pb-16 bg-[#F9F8F6]">
      
      {/* Hero Section - Full Background */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 overflow-hidden min-h-[90vh]">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/" 
            alt="Beautiful Indian Punjabi wedding couple" 
            fill 
            className="object-cover scale-105 animate-slow-zoom" 
            priority
          />
          {/* Blend nicely into the next section */}
          <div className="absolute inset-0 bg-[#2A362D]/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A362D]/40 to-[#F9F8F6]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <FadeIn delay={0.1} className="bg-[#EBE9E1]/20 backdrop-blur-md border border-[#EBE9E1]/30 text-[#EBE9E1] px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-8 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EBE9E1] animate-pulse"></span>
            Amritsar&apos;s Most Trusted
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-xl">
              Meaningful connections, <br className="hidden md:block" />
              <span className="text-[#CABAAB]">beautiful beginnings.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 text-xl md:text-2xl text-[#EBE9E1] max-w-2xl leading-relaxed drop-shadow-md">
              A modern approach to traditional matchmaking. We help families find verified, highly compatible life partners in a safe, confidential environment.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link
              href="/register"
              className="bg-[#CABAAB] text-[#2A362D] px-10 py-5 rounded-full hover:bg-white transition-all duration-300 text-lg font-bold flex items-center justify-center gap-2 hover:-translate-y-1 shadow-2xl hover:shadow-xl"
            >
              Create Your Profile
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-bold flex items-center justify-center hover:-translate-y-1 shadow-lg"
            >
              Speak to a Matchmaker
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <FadeIn className="lg:w-1/2 w-full">
             <div className="relative h-[450px] md:h-[550px] w-full rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-white">
                <Image 
                  src="/images/family_meeting.png" 
                  alt="Families meeting warmly" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out" 
                />
             </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="lg:w-1/2 text-left space-y-6">
             <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
               Why Choose Us
             </span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-tight">
               The Shubh Milan Promise
             </h2>
             <p className="text-[#595959] text-xl leading-relaxed max-w-xl">
               Guided by experts, built on trust. We believe in bringing families together gracefully, respecting both tradition and modern compatibility.
             </p>
          </FadeIn>
        </div>

        {/* Updated Promise Cards with 3 New Images */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          
          <StaggerItem className="bg-white rounded-[3rem] p-4 transition-all hover:-translate-y-2 hover:shadow-2xl shadow-lg duration-300 group border border-[#EBE9E1]">
            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6">
               <Image 
                 src="/images/about_us.png" 
                 alt="Verified Authenticity" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
               />
            </div>
            <div className="px-6 pb-6">
              <div className="w-12 h-12 bg-[#EBE9E1] rounded-full flex items-center justify-center text-[#4A5D4E] text-xl mb-4 shadow-sm">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">
                Verified Authenticity
              </h3>
              <p className="text-[#595959] leading-relaxed text-lg">
                Every profile undergoes strict manual verification. We ensure complete transparency and peace of mind for your family.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="bg-[#4A5D4E] rounded-[3rem] p-4 text-white group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl shadow-lg duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 shadow-inner">
               <Image 
                 src="/images/love_arrange.png" 
                 alt="Personalized Curation" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
               />
            </div>
            <div className="px-6 pb-6">
              <div className="w-12 h-12 bg-[#5C7060]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl mb-4 shadow-sm">
                🤝
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">
                Personalized Curation
              </h3>
              <p className="text-[#D1D9D3] leading-relaxed text-lg relative z-10">
                Beyond basic filters, our dedicated matchmakers understand your family&apos;s values to suggest deeply compatible alliances.
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="bg-white rounded-[3rem] p-4 transition-all hover:-translate-y-2 hover:shadow-2xl shadow-lg duration-300 group border border-[#EBE9E1]">
            <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6">
               <Image 
                 src="/images/success_story.png" 
                 alt="Discreet & Private" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
               />
            </div>
            <div className="px-6 pb-6">
              <div className="w-12 h-12 bg-[#EBE9E1] rounded-full flex items-center justify-center text-[#4A5D4E] text-xl mb-4 shadow-sm">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-3">
                Discreet & Private
              </h3>
              <p className="text-[#595959] leading-relaxed text-lg">
                Your photographs and sensitive details are never public. You have complete control over who views your family&apos;s information.
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* Final CTA Section - Fixed High Contrast */}
      <FadeInScale>
        <section className="mx-6 max-w-6xl md:mx-auto rounded-[3rem] relative overflow-hidden shadow-2xl group min-h-[500px] flex items-center justify-center mb-10">
          <Image 
            src="/images/happy_couple.png" 
            alt="Happy young Indian couple casually walking" 
            fill 
            className="object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-[2000ms] ease-out brightness-[0.4]" 
          />
          <div className="absolute inset-0 bg-[#2A362D]/60 mix-blend-multiply z-10 transition-colors duration-700 group-hover:bg-[#2A362D]/40" />
          
          <div className="relative z-20 px-8 py-24 md:py-32 text-center flex flex-col items-center w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F8F6] mb-8 max-w-3xl drop-shadow-xl">
              Ready to find the perfect addition to your family?
            </h2>
            <p className="text-[#E0E6E2] mb-12 max-w-2xl text-xl md:text-2xl drop-shadow-lg opacity-90">
              Join our exclusive network of families in Amritsar. Registration is simple, secure, and completely confidential.
            </p>
            <Link
              href="/register"
              className="bg-[#D9CDBF] text-[#2A362D] px-12 py-5 rounded-full hover:bg-[#F9F8F6] transition-all duration-300 text-xl font-bold shadow-2xl hover:-translate-y-2 hover:scale-105"
            >
              Begin Registration
            </Link>
          </div>
        </section>
      </FadeInScale>
      
    </main>
  );
}