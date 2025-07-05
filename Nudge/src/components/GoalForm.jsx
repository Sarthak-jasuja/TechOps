import React, { useState } from "react";

const GoalForm = ({ onSubmit }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = () => {
    if (goal.trim()) {
      onSubmit(goal);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent new line
      handleSubmit();     // submit form
    }
  };

  return (
    <section className="bg-transparent px-6 py-10 rounded-xl max-w-xl mx-auto">
      <h2
        className="text-2xl font-semibold text-white mb-4 
                   overflow-hidden whitespace-nowrap border-r-2 border-white 
                   w-[32ch] animate-typing"
      >
        What do you want to achieve?
      </h2>

      <textarea
        className="w-full p-4 text-white placeholder-grey border border-white/40 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        rows="4"
        placeholder="e.g., I want to build my startup, get fit, become a software engineer..."
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        onKeyDown={handleKeyDown} // 🔥 Capture Enter key
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-white text-gray-600 font-medium px-6 py-2 rounded-md transition"
      >
        Next Step
      </button>
    </section>
  );
};

export default GoalForm;
