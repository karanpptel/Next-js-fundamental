import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "blog"
    }
}

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <p>This page contains the latest blog posts.</p>
        </div>
    )
}