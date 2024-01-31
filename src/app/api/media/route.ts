import path from "path";
import { promises as fs } from "fs";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (req.method !== "GET") {
    throw new Error("Method not allowed");
  }

  const jsonDirectory = path.join(process.cwd());
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");

  return new Response(fileContents);
}

export async function PUT(req: Request) {
  const jsonDirectory = path.join(process.cwd());
  if (req.method !== "PUT") {
    throw new Error("Method not allowed");
  }
  const body = await req.json();

  await fs.writeFile(
    jsonDirectory + "/data.json",
    Buffer.from(JSON.stringify(body))
  );

  revalidateCache();
  return NextResponse.json({});
}

const revalidateCache = () => {
  revalidateTag("trending");
  revalidateTag("movies");
  revalidateTag("tvSeries");
  revalidateTag("bookmarks");
  revalidateTag("recommendations");
};
