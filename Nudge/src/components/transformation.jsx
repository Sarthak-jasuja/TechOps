import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TransformationPage() {
  const location = useLocation();
  const goal = location.state?.goal || 'your goal';
  const [content, setContent] = useState('');

  useEffect(() => {
    const lower = goal.toLowerCase();
    let section = '';

    if (lower.includes('engineer')) {
      section = `
        1. 📘 *Problem of the Day*: Solve a basic coding puzzle.
        2. 💡 *Watch & Reflect*: 3 min video on innovation (e.g. Elon Musk, MIT).
        3. ✍️ *Journal Prompt*: "Why do I want to become an engineer?"
      `;
    } else if (lower.includes('designer')) {
      section = `
        1. 🎨 *Sketch Task*: Redesign a common app icon in 3 mins.
        2. 👁️ *Inspire*: Explore a Behance shot and save what you love.
        3. ✍️ *Journal Prompt*: "What do I feel when I create something beautiful?"
      `;
    } else if (lower.includes('entrepreneur')) {
      section = `
        1. 💼 *Business Spark*: Write one idea to solve a real-world problem.
        2. 🧠 *Watch & Reflect*: TED Talk on creativity or startup journey.
        3. ✍️ *Journal Prompt*: "What problem am I burning to solve?"
      `;
    } else {
      section = `
        1. ✨ *3-minute Mind Ritual*: Close your eyes. Breathe. Visualize your goal.
        2. 📖 *Read*: One quote that speaks to your soul.
        3. ✍️ *Journal Prompt*: "Why do I deserve to achieve this dream?"
      `;
    }

    setContent(section);
  }, [goal]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-brand-light to-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-brand mb-4"
      >
        🌟 Your First Steps Towards {goal}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-xl text-gray-700 text-lg mb-8"
      >
        Let’s begin with your transformation. Start small, go deep.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-left whitespace-pre-wrap"
      >
        {content}
      </motion.div>
    </section>
  );
}
