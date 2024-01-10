import { type NextRequest, NextResponse } from 'next/server'

const isLoggedIn: boolean = false

export function middleware(request: NextRequest) {
    let cookie = request.cookies.get('my-cookie')
    let headers = new Headers(request.headers)
    if (isLoggedIn) return NextResponse.next()
    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/profile'],
}
