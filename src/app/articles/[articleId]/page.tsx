"use client";
import { use } from "react";
import Link from "next/link";

export default  function NewzArticle({
    params,
    searchParams,
}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {

    const {articleId} = use(params);
    const {lang = "en"} =  use(searchParams);
    return (
    <div>
        <h1>Newz Article {articleId}</h1>
        <p>Reading in language - {lang}</p>

        <div>
            <Link href={`/articles/${articleId}?lang=en`}>English</Link>
            <Link href={`/articles/${articleId}?lang=es`}>Spenish</Link>
            <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        </div>
    </div>
    );
}


// here there is only two differences an async await used in server component not in client component and in Client component we can use {use} hook from react  instead of async await.