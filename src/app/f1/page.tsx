import Link from "next/link";

export default function F1() {
    return (
        <>
            <h1> Formula 1 Page Information </h1>
            <div>
                <Link href={"/f1/f2"}>Formula 2</Link>
                <Link href={"/f3"}>...Formula 3</Link>
            </div>
        </>
        
    )
}