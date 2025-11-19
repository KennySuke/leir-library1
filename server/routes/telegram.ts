import { Request, Response } from "express";

export async function handleTelegramNotification(req: Request, res: Response) {
  try {
    const { botToken, chatId, message } = req.body;

    if (!botToken || !chatId || !message) {
      return res.status(400).json({
        error: "Missing required fields: botToken, chatId, message",
      });
    }

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API error:", errorData);
      return res.status(response.status).json({
        error: "Failed to send Telegram message",
        details: errorData,
      });
    }

    const data = await response.json();
    res.json({ success: true, messageId: data.result.message_id });
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    res.status(500).json({
      error: "Internal server error",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
