import { GoogleGenerativeAI } from "@google/generative-ai";
import { companyData } from "../data/chatbotData";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_API_KEY_HERE";
const genAI = new GoogleGenerativeAI(API_KEY);

export const getGeminiResponse = async (userMessage: string) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const context = `
            You are the official AI assistant for ${companyData.company.name}.
            Your goal is to answer questions strictly based on the provided company information.
            If a question is outside the scope of this information, politely inform the user that you only have information about ${companyData.company.name}'s services, projects, and team.

            COMPANY DATA:
            Name: ${companyData.company.name}
            Description: ${companyData.company.description}
            Location: ${companyData.company.location}
            Founded: ${companyData.company.founded}
            Contact: ${companyData.company.email}, ${companyData.company.phone}

            SERVICES:
            ${companyData.services.map(s => `- ${s.name}: ${s.description}`).join('\n')}

            PROJECTS:
            ${companyData.projects.map(p => `- ${p.name} (${p.type})`).join('\n')}

            TEAM:
            ${companyData.team.map(t => `- ${t.name}: ${t.role}`).join('\n')}

            PROCESS:
            Our process involves 4 phases: Strategy, UX/UI Design, Web Development, and Ongoing Support/Optimization.

            STRICT RULE:
            - Do not mention other companies or unrelated topics.
            - If asked about "Mamasusan BBQ", explain it's an inventory management system we built.
            - If asked about "Shared Marketing", explain it's a networking and MLM platform we developed.
            - Keep responses professional, concise, and friendly.
        `;

        const prompt = `${context}\n\nUser Question: ${userMessage}\nAssistant:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later or contact us directly!";
    }
};
