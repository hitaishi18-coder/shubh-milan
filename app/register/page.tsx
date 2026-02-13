export default function Register() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">

      <h1 className="text-4xl font-bold text-rose-800 mb-6">
        Register Your Profile
      </h1>

      <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Fill out our secure registration form. 
        Our team will personally verify your details 
        and connect you with suitable matches.
      </p>

      <div className="border rounded-lg shadow-sm p-8 bg-rose-50">

        <h2 className="text-2xl font-semibold text-rose-700 mb-4">
          Why Register with Shubh Milan?
        </h2>

        <ul className="text-gray-600 space-y-2 mb-8">
          <li>✔️ 100% Family Verified Profiles</li>
          <li>✔️ Personal Guidance & Counselling</li>
          <li>✔️ Privacy Guaranteed</li>
          <li>✔️ Traditional & Respectful Process</li>
        </ul>

        <a
          href="/registration-form"
          target="_blank"
          className="bg-rose-700 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition"
        >
          Open Registration Form
        </a>

      </div>

    </div>
  );
}
