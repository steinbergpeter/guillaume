import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json({
        hello: 'world',
    })
}

export async function POST(req: Request) {
    const { name, age } = await req.json()
    const resObj = {
        name,
        age,
        success: 'True',
    }
    return NextResponse.json(resObj)
}
