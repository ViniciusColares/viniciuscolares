import { personal, careerOverview, careerExpectations } from "@/app/constants";
import experiences from "@/app/constants/experiences";
import general from "@/app/constants/general";
import skills from "@/app/constants/skills";
import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
        ${personal}
        ${careerOverview}
        ${careerExpectations}
        ${skills}
        ${experiences}
        ${general}`,
      },
      ...messages,
    ],
    stream: true,
    temperature: 1,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
