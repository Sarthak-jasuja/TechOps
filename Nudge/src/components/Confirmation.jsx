import React from "react";

const Confirmation = ({ onConfirm }) => {
  return (
    <section className="bg-transparent px-6 py-10 rounded-xl max-w-xl mx-auto">
      <h2
        className="text-2xl font-semibold text-white mb-4 
                   overflow-hidden whitespace-nowrap border-r-2 border-white 
                   w-[42ch] animate-typing"
      >
        Ready to Achieve your Goals?
      </h2>

      <button
        onClick={onConfirm}
        className="mt-6 bg-white text-gray-600 font-semibold px-6 py-2 rounded-md transition hover:bg-lime-400 hover:text-white"
      >
        Yes, Let’s Go!
      </button>
    </section>
  );
};

export default Confirmation;
