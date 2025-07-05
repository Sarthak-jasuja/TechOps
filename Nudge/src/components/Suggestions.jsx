import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSuggestions } from '../utils/gemini';

const Suggestions = ({ goal, obstacle }) => {
  const [suggestion, setSuggestion] = useState('');
  const [displayed, setDisplayed]     = useState('');
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState('');
  const [done, setDone]               = useState(false);

  const navigate = useNavigate();

  // fetch
  useEffect(() => {
    (async () => {
      try {
        const result = await fetchSuggestions(goal, obstacle);
        if (!result) throw new Error('Empty response from Gemini');
        setSuggestion(result);
      } catch (err) {
        console.error(err);
        setError('Something went wrong while fetching suggestions.');
        setLoading(false);
      }
    })();
  }, [goal, obstacle]);

  // type‑writer
  useEffect(() => {
    if (!suggestion) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + suggestion.charAt(i));
      i++;
      if (i >= suggestion.length) {
        clearInterval(interval);
        setDone(true);        // finished typing
      }
    }, 15);
    setLoading(false);
    return () => clearInterval(interval);
  }, [suggestion]);

  if (loading) return <p className="text-white">Loading suggestions…</p>;
  if (error)   return <p className="text-red-500">{error}</p>;

  return (
    <div className="text-white space-y-4">
      <h2 className="text-2xl font-bold">Your Personalized Plan:</h2>
      <div
        className="whitespace-pre-line leading-relaxed"
        dangerouslySetInnerHTML={{ __html: displayed }}
      />

      {done && (
        <button
          onClick={() => navigate('/signup')}
          className="mt-6 cursor-pointer inline-block rounded-full bg-gradient-to-bl from-black to-blue-700 px-6 py-3 font-medium text-white shadow hover:bg-brand-dark transition">
          Ready to change?
        </button>
      )}
    </div>
  );
};

export default Suggestions;
