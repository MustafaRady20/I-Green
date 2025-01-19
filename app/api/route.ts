import { NextApiRequest, NextApiResponse } from "next";

interface TelegramRequestBody {
  message: string;
  chatId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "POST") {
    const { message }: TelegramRequestBody = req.body;
    console.log("we are here");
    // Validate input
    if (!message) {
      res.status(400).json({ error: "Message and Chat ID are required." });
      return;
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_MY_CHAT_ID;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Telegram API Error: ${response.status} - ${errorText}`
        );
      }

      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Error sending message:", errorMessage);
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
