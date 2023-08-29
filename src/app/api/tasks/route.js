import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const getTasks = await prisma.task.findMany()
    return NextResponse.json(getTasks)
}

export async function POST(request) {
    const data = await request.json()
    const createTask = await prisma.task.create({data})
    return NextResponse.json(createTask)
}