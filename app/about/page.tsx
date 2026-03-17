export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-main mb-6">
          About Shubh Milan
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
          Shubh Milan is a trusted family-run matrimonial service dedicated to helping families find suitable life partners with respect, tradition, and complete transparency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 bg-surface rounded-[2.5rem] hover:bg-surface-hover transition-colors">
          <div className="w-14 h-14 bg-[#F9F8F6] rounded-2xl flex items-center justify-center text-primary text-2xl mb-6">
            🎯
          </div>
          <h2 className="text-2xl font-bold text-main mb-4">
            Our Mission
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            To create meaningful matrimonial connections based on genuine compatibility, shared values, and deep family trust.
          </p>
        </div>

        <div className="p-10 bg-surface rounded-[2.5rem] hover:bg-surface-hover transition-colors">
          <div className="w-14 h-14 bg-[#F9F8F6] rounded-2xl flex items-center justify-center text-primary text-2xl mb-6">
            ⭐
          </div>
          <h2 className="text-2xl font-bold text-main mb-4">
            Our Values
          </h2>
          <p className="text-muted leading-relaxed text-lg">
            Transparency, uncompromised privacy, personal matchmaking guidance, and complete respect for Punjabi traditions.
          </p>
        </div>
      </div>

    </div>
  );
}