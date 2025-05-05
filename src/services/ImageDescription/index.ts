"use server";

import { GoogleGenAI } from "@google/genai";

const generateDescription = () => {
  const contents = [
   { role:'user', parts:[
    
   ]}
  ];

  const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY as string);

  const model = genAI

  const 

  let responseString = "";

  return responseString;
};
