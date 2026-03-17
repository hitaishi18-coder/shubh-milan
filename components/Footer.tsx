import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

export default function Footer() {
  return (
    <footer className="bg-[#2A362D] text-[#F9F8F6] rounded-t-[2.5rem] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative mt-4">
      
      {/* Decorative Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#CABAAB] via-[#EBE9E1] to-[#CABAAB] absolute top-0 left-0"></div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-6 justify-between">

        <FadeIn className="md:w-5/12 space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#F9F8F6] rounded-full flex items-center justify-center text-[#2A362D] font-bold text-xs group-hover:scale-110 transition-transform duration-300">
              SM
            </div>
            <h2 className="text-lg font-bold tracking-tight text-[#EBE9E1]">Shubh Milan</h2>
          </Link>
          <p className="text-[12px] text-[#A1ACA4] leading-snug max-w-sm">
            Meaningful connections, beautiful beginnings. We are Amritsar&apos;s most trusted, family-run matrimonial service.
          </p>
          <div className="pt-1 flex gap-2">
            <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EBE9E1] hover:text-[#2A362D] transition-all duration-300 hover:-translate-y-0.5 text-[10px]">IG</a>
            <a href="#" className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#EBE9E1] hover:text-[#2A362D] transition-all duration-300 hover:-translate-y-0.5 text-[10px]">FB</a>
          </div>
        </FadeIn>

        <StaggerContainer className="md:w-3/12">
          <h3 className="text-sm font-bold mb-2 text-[#EBE9E1]">Explore Links</h3>
          <ul className="space-y-1.5">
            <StaggerItem>
              <Link href="/about" className="text-[12px] text-[#D1D9D3] hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C7060] group-hover:bg-white transition-colors"></span>
                Our Story
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/success-stories" className="text-[12px] text-[#D1D9D3] hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C7060] group-hover:bg-white transition-colors"></span>
                Success Stories
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/love-arrange" className="text-[12px] text-[#D1D9D3] hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C7060] group-hover:bg-white transition-colors"></span>
                Love to Arrange
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/register" className="text-[12px] text-[#D1D9D3] hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C7060] group-hover:bg-white transition-colors"></span>
                Register Profile
              </Link>
            </StaggerItem>
          </ul>
        </StaggerContainer>

        <StaggerContainer className="md:w-4/12">
          <h3 className="text-sm font-bold mb-2 text-[#EBE9E1]">Get In Touch</h3>
          <div className="space-y-2 text-[#D1D9D3]">
            <StaggerItem className="flex items-start gap-2">
              <span className="text-base mt-0.5">📞</span> 
              <div>
                <p className="text-[9px] text-[#A1ACA4] uppercase tracking-wider font-semibold mb-0.5">Call</p>
                <p className="font-semibold text-[12px] text-white">+91 99884-67270</p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex items-start gap-2">
              <span className="text-base mt-0.5">📍</span> 
              <div>
                <p className="text-[9px] text-[#A1ACA4] uppercase tracking-wider font-semibold mb-0.5">Location</p>
                <p className="text-[12px] text-white leading-tight">Amritsar, Punjab</p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex items-start gap-2">
              <span className="text-base mt-0.5">✉️</span> 
              <div>
                <p className="text-[9px] text-[#A1ACA4] uppercase tracking-wider font-semibold mb-0.5">Email us</p>
                <p className="text-[12px] text-white">info@shubhmilan.com</p>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>

      </div>

      <div className="border-t border-white/10 mt-1">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row justify-between items-center gap-1">
          <p className="text-[10px] text-[#A1ACA4]">
            © {new Date().getFullYear()} Shubh Milan Matrimonial Services.
          </p>
          <div className="flex gap-4 text-[10px] text-[#A1ACA4]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}