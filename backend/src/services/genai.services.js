import dotenv from "dotenv";

dotenv.config();

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.BASE_URL,
});

export const summarizeText = async (text) => {
  const prompt = `Summarize the following note in simple terms:\n\n${text}`;

  const response = await openai.chat.completions.create({
    model: process.env.MODEL_NAME,
    messages: [
      {
        role: "user",
        content: text,
      },
      {
        role: "system",
        content: prompt,
      },
    ],
  });
  return response.choices[0].message.content;
};
