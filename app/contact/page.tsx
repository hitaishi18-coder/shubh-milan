import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Shubh Milan | Marriage Bureau in Amritsar",
  description:
    "Contact Shubh Milan, a trusted marriage bureau in Amritsar for matrimonial registration and love-to-arrange consultation.",
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-main mb-6">
          Get in Touch
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          For matrimonial registration, profile verification or confidential consultation in Amritsar, we are here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="p-10 bg-surface rounded-[2.5rem]">
          <h2 className="text-2xl font-bold text-main mb-8">
            Contact Details
          </h2>
          <div className="space-y-6 text-lg">
            <p className="flex items-center gap-4 text-muted">
              <span className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-primary">📞</span> 
              +91-XXXXXXXXXX
            </p>
            <p className="flex items-center gap-4 text-muted">
              <span className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-primary">💬</span> 
              +91-XXXXXXXXXX (WhatsApp)
            </p>
            <p className="flex items-center gap-4 text-muted">
              <span className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-primary">📧</span> 
              info@shubhmilan.com
            </p>
            <p className="flex items-center gap-4 text-muted">
              <span className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-primary">📍</span> 
              Amritsar, Punjab
            </p>
          </div>
        </div>

        <div className="p-10 bg-primary text-white rounded-[2.5rem]">
          <h2 className="text-2xl font-bold mb-8">
            Working Hours
          </h2>
          <div className="space-y-6 text-lg text-[#D1D9D3]">
            <div className="pb-4 border-b border-primary-light">
              <p className="font-semibold text-white mb-1">Monday – Saturday</p>
              <p>10:00 AM – 7:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Sunday</p>
              <p>By Appointment Only</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}