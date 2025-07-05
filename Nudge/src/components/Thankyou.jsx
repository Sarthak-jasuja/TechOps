// src/components/ThankYou.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

export default function ThankYou() {
  // Confetti only fires once on mount
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // stop confetti after 4 s
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-brand via-blue-200 to-white px-6">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />}

      <div className="max-w-lg rounded-3xl bg-white/80 p-10 text-center shadow-xl backdrop-blur-lg">
        <h1 className="text-4xl font-extrabold text-brand-dark drop-shadow-sm">
          🎉 Thank You!
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Your first nudge is on its way. Head to your inbox—open it, breathe it in, and let the quiet spark begin.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-brand px-6 py-3 font-medium text-gray-500 shadow hover:bg-brand-dark transition">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
