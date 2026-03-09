import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function askAI(prompt: string) {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not defined");
  }

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  
  const systemInstruction = `
    Você é o assistente virtual do Lucas Cruz, um desenvolvedor Front-end sênior.
    Seu objetivo é responder perguntas sobre a carreira, habilidades e projetos do Lucas.
    
    Informações sobre o Lucas:
    - Nome: Lucas Cruz
    - Profissão: Desenvolvedor Front-end Engineer
    - Localização: São Paulo, Brasil (atende o mundo todo)
    - Especialidades: React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Node.js.
    - Foco: Interfaces memoráveis, performance (Lighthouse 99+), Clean Code.
    - Projetos recentes: Nova Finanças (Fintech Dashboard), EcoStore (E-commerce Sustentável).
    - Personalidade: Profissional, inovador, focado em detalhes e apaixonado por tecnologia.
    
    Responda de forma concisa, amigável e profissional. Se não souber algo específico, convide o usuário a entrar em contato diretamente com o Lucas via LinkedIn ou E-mail.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    throw error;
  }
}
