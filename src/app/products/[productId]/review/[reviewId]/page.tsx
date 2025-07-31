"use client";
import { notFound } from "next/navigation";


//this function is generally used for testing purposes to simulate errors and demons
// function getNumberInt(count: number){
//     return Math.floor(Math.random() * count);
// }

// 1. Define the params prop as a Promise containing the expected parameters.
interface ReviewPageProps {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}

export default async function reviewPage({ params}: ReviewPageProps) {
    const resolvedParams = await params;
    // const random = getNumberInt(2);
    // if (random === 1) {
    //     throw new Error('Error Loading Review');
    // }
    if(parseInt(resolvedParams.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <h1>Review for Product {resolvedParams.productId} and Review ID: {resolvedParams.reviewId}</h1>
            <p>This page displays the details of a specific review.</p>
        </div>
    );
}