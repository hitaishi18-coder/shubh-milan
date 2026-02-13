export default function Home() {
  return (
    <main className="bg-gradient-to-b from-rose-50 to-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold text-rose-800">
          Shubh Milan
        </h1>

        <p className="mt-6 text-xl text-gray-700 max-w-2xl">
          Vishwas ke saath rishton ka milan.
          A trusted family-run matrimonial service
          helping families find suitable life partners.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/register"
            className="bg-rose-700 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition"
          >
            Register Profile
          </a>

          <a
            href="/contact"
            className="border border-rose-700 text-rose-700 px-6 py-3 rounded-lg hover:bg-rose-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-rose-800 mb-12">
          Why Choose Shubh Milan?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-rose-700 mb-4">
              Verified Profiles
            </h3>
            <p className="text-gray-600">
              Every profile is personally reviewed and verified.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-rose-700 mb-4">
              Personal Guidance
            </h3>
            <p className="text-gray-600">
              We guide families throughout the entire process.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold text-rose-700 mb-4">
              Complete Privacy
            </h3>
            <p className="text-gray-600">
              Your information is handled with utmost confidentiality.
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-rose-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-rose-800 mb-6">
          Start Your Journey Today
        </h2>

        <a
          href="/register"
          className="bg-rose-700 text-white px-8 py-3 rounded-lg hover:bg-rose-800 transition"
        >
          Register Now
        </a>
      </section>

    </main>
  );
}
