"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const generateDescription = () => {
  const contents = [
    {
      role: "user",
      parts: [],
    },
  ];

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
  const modal = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = modal.generateContentStream({ contents });

  let responseString = "";

  return responseString;
};
