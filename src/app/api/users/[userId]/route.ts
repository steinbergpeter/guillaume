import { NextResponse } from 'next/server'
import data from '@/data.json'

export async function GET(_req: Request, ctx: any) {
    const { userId } = ctx.params
    const user = data.filter((user) => userId === user.id.toString())
    return NextResponse.json({ user })
}
