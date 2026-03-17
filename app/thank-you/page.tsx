import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 pt-20">

      <div className="bg-surface rounded-[3rem] p-12 max-w-lg text-center w-full">
        
        <div className="w-20 h-20 bg-primary text-[#F9F8F6] rounded-full flex items-center justify-center text-4xl mx-auto mb-8">
          ✓
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-main mb-4">
          Thank You
        </h1>

        <p className="text-muted text-lg mb-10 leading-relaxed">
          Your registration has been received successfully. Our matchmaking team will review your details and contact you shortly.
        </p>

        <Link
          href="/"
          className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-hover transition-colors"
        >
          Return to Home
        </Link>

      </div>

    </div>
  );
}