"use client"

import { signOut, useSession } from "next-auth/react"
import Image from "next/image"

export default function ProfileInfo() {
    const { data: session } = useSession()

    // Provide a fallback image if session?.user?.image is undefined
    const userImage = session?.user?.image || "/default-avatar.png" // Fallback to a default image if not available

    return (
        <div>
            <div className="px-20 flex items-center gap-4">
                <Image
                    src={userImage} // Use the fallback image if user image is not available
                    alt="user image"
                    width={500}
                    height={500}
                    className="w-20 h-20 object-cover rounded-full"
                />
                <div>
                    <h2>{session?.user?.name}</h2>
                    <h2>{session?.user?.email}</h2>
                </div>
            </div>
            <button
                onClick={() => signOut()}
                className="bg-zinc-950 text-zinc-200 px-5 py-2 mx-20 font-semibold mt-10 hover:bg-yellow-500 hover:text-black duration-200 rounded-sm"
            >
                Signout
            </button>
        </div>
    )
}
