import React from 'react';

function ContactUs() {
  return (
    <section className="min-h-screen pt-28 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-8 text-gray-300">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello —
          feel free to reach out.
        </p>

        <form
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for reaching out!");
          }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full p-3 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              required
              rows="4"
              className="w-full p-3 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
