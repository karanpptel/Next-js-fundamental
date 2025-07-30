import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Profile"
    }
}

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <p>This page contains information about your profile.</p>
        </div>
    )
}