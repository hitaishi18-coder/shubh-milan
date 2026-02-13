export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-rose-800 mb-6">
        About Shubh Milan
      </h1>

      <p className="text-gray-700 leading-7 mb-6">
        Shubh Milan is a trusted family-run matrimonial service
        dedicated to helping families find suitable life partners
        with respect, tradition and transparency.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-rose-700 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600">
            To create meaningful matrimonial connections based on
            compatibility, values and family trust.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-rose-700 mb-3">
            Our Values
          </h2>
          <p className="text-gray-600">
            Transparency, privacy, personal guidance and
            complete respect for traditions.
          </p>
        </div>

      </div>

    </div>
  );
}
