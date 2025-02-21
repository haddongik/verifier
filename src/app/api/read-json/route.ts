import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "log_info.json");

    // 🔹 파일 존재 여부 확인
    try {
      await fs.access(filePath);
    } catch (error) {
      return NextResponse.json({ error: "파일이 존재하지 않습니다." }, { status: 404 });
    }

    // 🔹 파일 읽기 및 JSON 파싱
    const fileContents = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    return NextResponse.json(jsonData); // ✅ JSON 응답 반환
  } catch (error) {
    console.error("JSON 파일을 읽는 중 오류 발생:", error);
    return NextResponse.json({ error: "파일을 읽을 수 없습니다." }, { status: 500 });
  }
}
