import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "blog"
    }
}

export default async function Blog() {

    //here we can use async await to delay the response of the page
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Intensional Delay")
        }, 2000)
    })
    return (
        <div>
            <h1>Blog</h1>
            <p>This page contains the latest blog posts.</p>
        </div>
    )
}