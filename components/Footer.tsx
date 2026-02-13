export default function Footer() {
  return (
    <footer className="bg-rose-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-4">Shubh Milan</h2>
          <p className="text-sm text-rose-100">
            Vishwas ke saath rishton ka milan.
            A trusted family-run matrimonial service.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-rose-100">
            <li><a href="/about">About</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/love-arrange">Love to Arrange</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-rose-100">
            📞 +91-XXXXXXXXXX
          </p>
          <p className="text-sm text-rose-100">
            📍 Amritsar & Nearby Areas
          </p>
        </div>

      </div>

      <div className="text-center text-sm py-4 bg-rose-900">
        © {new Date().getFullYear()} Shubh Milan. All rights reserved.
      </div>
    </footer>
  );
}
