'use client'

import { useRouter } from 'next/navigation'

export default function Profile() {
    const { push } = useRouter()
    // console.log({ router })

    return (
        <main className="">
            <p>Profile Page of my application</p>
            <p>My List of Profiles</p>
            <ul>
                <li onClick={() => push('/profile/1')}>Profile 1</li>
                <li onClick={() => push('/profile/2')}>Profile 2</li>
                <li onClick={() => push('/profile/3')}>Profile 3</li>
            </ul>
        </main>
    )
}
