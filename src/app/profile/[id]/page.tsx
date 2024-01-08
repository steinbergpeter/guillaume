'use client'

import { useParams, useRouter } from 'next/navigation'

export default function ProfileID() {
    const { id } = useParams()
    const { back, replace, refresh, forward, push, prefetch } = useRouter()
    return (
        <main className="">
            <p>ID Page of my application: {id}</p>
            <p onClick={() => back()}>back to profile selection page</p>
            <p onClick={() => push('/')}>back home</p>
        </main>
    )
}
