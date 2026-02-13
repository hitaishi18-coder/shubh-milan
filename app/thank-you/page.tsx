export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50 px-6">

      <div className="bg-white shadow-xl rounded-xl p-10 max-w-lg text-center">

        <h1 className="text-3xl font-bold text-rose-800 mb-4">
          Thank You 🙏
        </h1>

        <p className="text-gray-700 mb-6">
          Your registration has been received successfully.
          Our team will verify your details and contact you shortly.
        </p>

        <a
          href="http://localhost:3000/thank-you
"
          className="inline-block bg-rose-700 text-white px-6 py-2 rounded-lg hover:bg-rose-800 transition"
        >
          Back to Home
        </a>

      </div>

    </div>
  );
}
