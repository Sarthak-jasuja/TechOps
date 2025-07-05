export async function fetchSuggestions(goal, obstacle) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  console.log("🔑 Loaded API Key:", apiKey); // Debug

  if (!apiKey) {
    throw new Error("❌ API key is missing! Make sure your .env is set and the server restarted.");
  }

  const prompt = `A user wants to achieve this goal: "${goal}" but is struggling because: "${obstacle}". Suggest practical and motivational steps tailored for a person aged 18-30 who is likely distracted, sleepy, or inconsistent.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("❌ OpenAI API Error:", errorText);
    throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No suggestions received.";
}
