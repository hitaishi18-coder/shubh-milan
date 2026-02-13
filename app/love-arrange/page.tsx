export default function LoveArrange() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-rose-800 mb-6">
        Love to Arrange
      </h1>

      <p className="text-gray-700 leading-7 mb-6">
        Sometimes relationships begin with mutual understanding,
        but families may need guidance and reassurance.
      </p>

      <p className="text-gray-700 leading-7 mb-10">
        Shubh Milan respectfully helps in presenting such relationships
        to families and guiding them towards acceptance and traditional marriage.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-rose-700 mb-3">
            What We Offer
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>✔️ Confidential Consultation</li>
            <li>✔️ Family Counselling</li>
            <li>✔️ Respectful Communication</li>
            <li>✔️ Traditional Marriage Process</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-sm text-center">
          <h2 className="text-xl font-semibold text-rose-700 mb-4">
            Need Guidance?
          </h2>
          <p className="text-gray-600 mb-6">
            We ensure privacy and respectful handling
            of every situation.
          </p>

          <a
            href="/contact"
            className="bg-rose-700 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition"
          >
            Contact for Consultation
          </a>
        </div>

      </div>

    </div>
  );
}
