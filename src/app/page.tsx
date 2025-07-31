import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
      <h1>Welcome to the Next.js Home Page</h1>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
      <Link href="articles/breaking-news-123?lang=en">Read in english</Link>
      <Link href="articles/breaking-news-123?lang=fr">Read in french</Link>
      <Link href="articles/breaking-news-123?lang=es">Read in spanish</Link>

    </>
  );
}