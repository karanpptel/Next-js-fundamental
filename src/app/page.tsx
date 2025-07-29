import Image from "next/image";

export default function Home() {
  return (
    <>
    <Image src="/next.svg" alt="Next.js Logo" width={100} height={100} />
      <h1>Welcome to the Next.js Home Page</h1>
      <p>This is a simple page demonstrating the use of Next.js.</p>
    </>
  );
}