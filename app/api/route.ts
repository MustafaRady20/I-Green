// app/api/send-message/route.js

import axios from "axios"
import { NextResponse } from "next/server"
import { parse } from "querystring"

import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.arrayBuffer()
    const decodedBody = new TextDecoder().decode(body)
    const parsedBody = parse(decodedBody)
    const message = parsedBody.message
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_MY_CHAT_ID
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`
    const response = await axios.post(telegramUrl, {
      chat_id: chatId,
      text: message,
    })
    if (!response.status) {
      return NextResponse.json(
        { success: false, message: "Failed to send message" },
        { status: response.status },
      )
    }
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "internal server error" },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json({ message: "method not allowed" }, { status: 404 })
}
