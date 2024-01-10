import { NextResponse } from 'next/server'
import data from '@/data.json'
import { Person } from '@/app/type'

export async function GET(req: Request) {
    return NextResponse.json(data)
}

export async function POST(req: Request) {
    let newEntry = { ...req.body } as Person
    if (!newEntry) throw new Error('no newEntry!')
    newEntry.id = newEntry.id ? newEntry.id : data.length
    data.push(newEntry as { name: string; age: number; id: number })
    return NextResponse.json('success')
}
