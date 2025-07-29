import { notFound } from "next/navigation";


export default function reviewPage({ params}: {
    params: {
        productId: string;
        reviewId: string;
    }
}) {
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <h1>Review for Product {params.productId} and Review ID: {params.reviewId}</h1>
            <p>This page displays the details of a specific review.</p>
        </div>
    );
}