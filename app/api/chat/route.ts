import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "AIzaSyDR84zxFjxYgucZjpKZo-kT_sJ4C3aIkZ8");

const SYSTEM_PROMPT = `
Vous êtes un expert en finances personnelles. Répondez en français avec des conseils clairs et structurés en Markdown.

Règles :
1. Utilisez des listes et sections
2. Limitez les réponses à 300 mots
3. Mentionnez toujours les risques
4. Pas de conseils spécifiques
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    const lastMessage = messages[messages.length - 1]?.content;
    if (!lastMessage) throw new Error("Aucun message utilisateur");

    const response = await model.generateContentStream({
      contents: [{
        role: "user",
        parts: [{ text: `${SYSTEM_PROMPT}\n\nQuestion: ${lastMessage}` }]
      }]
    });

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response.stream) {
            const text = await chunk.text();
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
          }
          controller.enqueue(encoder.encode(`data: [DONE]\n\n`));
        } catch (error) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: "Erreur de génération" })}\n\n`));
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache"
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Erreur serveur" }), { status: 500 });
  }
}