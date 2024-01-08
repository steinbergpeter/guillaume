import Link from 'next/link'

export default function Profile() {
    return (
        <main className="">
            <p>Profile Page of my application</p>
            <p>My List of Profiles</p>

            <div className="flex flex-col gap-2 mt-4">
                <Link
                    href="/profile/1"
                    className="text-blue-200 hover:text-blue-400"
                >
                    Profile 1
                </Link>
                <Link
                    href="/profile/2"
                    className="text-blue-200 hover:text-blue-400"
                >
                    Profile 2
                </Link>
                <Link
                    href="/profile/3"
                    className="text-blue-200 hover:text-blue-400"
                >
                    Profile 3
                </Link>
            </div>
        </main>
    )
}
