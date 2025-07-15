import { createOpenAI } from "@ai-sdk/openai";
import { experimental_wrapLanguageModel as wrapLanguageModel } from "ai";

import { customMiddleware } from "./custom-middleware";

// Configure OpenRouter as the base URL
const openrouter = createOpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

export const geminiProModel = wrapLanguageModel({
  model: openrouter("google/gemini-2.5-flash"),
  middleware: customMiddleware,
});

export const geminiFlashModel = wrapLanguageModel({
  model: openrouter("gpt-4o-mini"),
  middleware: customMiddleware,
});
