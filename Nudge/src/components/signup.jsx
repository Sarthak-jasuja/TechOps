import { useState, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-white ml-2" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path className="opacity-75" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" />
  </svg>
);

export default function Signup() {
  const [email, setEmail]     = useState('');
  const [sending, setSending] = useState(false);
  const [errMsg, setErrMsg]   = useState('');
  const navigate              = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    startTransition(() => {
      setSending(true);
      setErrMsg('');
    });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { to_email: email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        startTransition(() => {
          setEmail('');
          setSending(false);
          navigate('/thank-you');
        });
      })
      .catch((err) => {
        console.error(err);
        startTransition(() => {
          setSending(false);
          setErrMsg('❌ Could not send email. Please try again.');
        });
      });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 p-6">
      <h2 className="text-2xl font-semibold text-white mb-6 
                    overflow-hidden whitespace-nowrap border-r-2 border-white 
                    w-[32ch] animate-typing">
        One powerful nudge — right now
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-transparent border border-white/40 rounded-xl p-6 shadow-[0_0_20px_rgba(255,255,255,0.4)] space-y-4">

        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 text-white placeholder-white border border-white/40 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
        />

        <button
          type="submit"
          disabled={sending}
          className="w-full flex items-center justify-center rounded-md bg-white text-gray-800 font-medium px-6 py-3 hover:bg-gray-200 transition disabled:opacity-60"
        >
          {sending ? <>Sending<Spinner /></> : 'Start Transformation'}
        </button>

        {errMsg && <p className="text-center text-sm text-red-500">{errMsg}</p>}
      </form>
    </section>
  );
}
