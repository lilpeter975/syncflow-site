import { NextRequest, NextResponse } from "next/server";

const TG_TOKEN = "8736532690:AAGYbwa-p0G3MxmCreuZKLIOsqie2LMZ378";
const TG_CHAT = "6436472173";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, company, message } = body;

  const text = `🔔 SyncFlow — Yêu cầu tư vấn mới!

👤 ${name}
📧 ${email}
📱 ${phone || "—"}
🏢 ${company || "—"}

💬 ${message}`;

  await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TG_CHAT, text }),
  });

  return NextResponse.json({ ok: true });
}
