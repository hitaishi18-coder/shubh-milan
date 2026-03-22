import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-[#F9F8F6] rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#F9F8F6] rounded-full flex items-center justify-center text-primary font-bold text-xs">
              SM
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Shubh Milan</h2>
          </Link>
          <p className="text-[#D1D9D3] leading-relaxed max-w-sm">
            Meaningful connections, beautiful beginnings. A trusted family-run matrimonial service based in Amritsar.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-4 text-[#D1D9D3]">
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/register" className="hover:text-accent transition-colors">Register Profile</Link></li>
            <li><Link href="/love-arrange" className="hover:text-accent transition-colors">Love to Arrange</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
          <div className="space-y-4 text-[#D1D9D3]">
            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span> +91-6283713136
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span> Amritsar & Nearby Areas
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">✉️</span> shubhmilan164@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl"> 🅾 </span> ....
            </p>
          </div>
        </div>

      </div>

      <div className="text-center text-sm py-6 bg-primary-hover text-[#A1ACA4]">
        © {new Date().getFullYear()} Shubh Milan. All rights reserved.
      </div>
    </footer>
  );
}