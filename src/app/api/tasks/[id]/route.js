import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, {params}) {
    const getTasks = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(getTasks)
}

export async function PUT(request, {params}) {
    const requestBody = await request.json()
    const editTask = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: requestBody
    })
    return NextResponse.json(editTask)
}

export async function DELETE(request, {params}) {
    const deleteTask = await prisma.task.delete({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(deleteTask)
}