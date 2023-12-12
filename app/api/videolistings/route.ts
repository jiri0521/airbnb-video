import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // 'listing' コレクションから動画を取得する
    const listings = await prisma.listing.findMany({});
    // 取得した動画をJSON形式で返す
    return NextResponse.json(listings);
  } catch (e) {
    // エラーがあればキャッチして、それをクライアントに返す
    return NextResponse.error();
   }
}