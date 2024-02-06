import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    throw new Error("Method not allowed");
  }
  const response = await fetch(`${process.env.API_URL}`);
  const json = await response.json();
  return NextResponse.json({ media: json });
}

export async function PUT(req: Request) {
  if (req.method !== "PUT") {
    throw new Error("Method not allowed");
  }
  const body = await req.json();

  const editResponse = await fetch(`${process.env.API_URL}/${body.id}`, {
    method: req.method,
    body: JSON.stringify(body),
  });

  const res = await editResponse.json();

  if (res) {
    return NextResponse.json({ media: res, status: 200 });
  } else {
    return NextResponse.json({ media: null, status: 500 });
  }
}
