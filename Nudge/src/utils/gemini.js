import { GoogleGenAI } from '@google/genai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log("🔑 Gemini API Key Loaded:", API_KEY);

if (!API_KEY) throw new Error('❌ Gemini API key not found. Please set VITE_GEMINI_API_KEY.');

const ai = new GoogleGenAI({
  apiKey: API_KEY,
  apiVersion: 'v1',
});

export async function fetchSuggestions(goal, obstacle) {
  try {
    const prompt = `A user wants to achieve this goal: "${goal}" but is struggling because: "${obstacle}".
Give a short, friendly motivational plan in 3 clear points using simple paragraph formatting like ChatGPT. No asterisks, no markdown, no lists — just conversational tone.`;


    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    return response.candidates?.[0]?.content?.parts?.[0]?.text;
  } catch (err) {
    console.error('❌ Error fetching from Gemini:', err);
    throw new Error('Failed to get suggestions from Gemini.');
  }
}
