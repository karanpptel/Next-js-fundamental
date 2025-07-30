import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
      <h1>Welcome to the Next.js Home Page</h1>
      <p>This is a simple page demonstrating the use of Next.js.</p>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>

    </>
  );
}