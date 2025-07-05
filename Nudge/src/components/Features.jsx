function Features() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">🌟 Purpose of This Website</h1>

      <p className="text-lg mb-8 text-center text-white/90">
        This app helps you overcome personal productivity struggles by breaking down your goals,
        identifying obstacles, and giving you customized, motivational suggestions using advanced AI.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          title="🎯 Set Your Goal"
          description="Clearly define what you want to achieve — whether it's waking up early, learning a skill, or building a habit."
        />
        <FeatureCard
          title="🚧 Identify Obstacles"
          description="List distractions, doubts, or habits that get in your way. Add them one by one and reflect on what’s really stopping you."
        />
        <FeatureCard
          title="🧠 AI-Powered Suggestions"
          description="Get tailored, practical tips and motivational strategies based on your inputs — powered by Google's Gemini AI."
        />
        <FeatureCard
          title="📈 Build Awareness & Action"
          description="By breaking goals into obstacles and addressing them directly, the app helps you build self-awareness and move forward confidently."
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}

export default Features;
