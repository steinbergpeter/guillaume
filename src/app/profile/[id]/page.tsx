'use client'

import { useParams } from 'next/navigation'

export default function ProfileID() {
    const { id } = useParams()
    return (
        <main className="">
            <p>ID Page of my application: {id}</p>
        </main>
    )
}
