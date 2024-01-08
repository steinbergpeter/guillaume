'use client'

import { useParams } from 'next/navigation'
export default function ProfileIDPostID() {
    const { id, postId } = useParams()
    return (
        <main className="">
            <p>My ProfileIDPostID Page</p>
            <p>ID: {id}</p>
            <p>PostId: {postId}</p>
        </main>
    )
}
