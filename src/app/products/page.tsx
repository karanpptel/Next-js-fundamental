import Link from "next/link";

export default function ProductPage() {
    const productId = 100;
    return (
        <div>
            <h1>Products</h1>
            <p>This page lists all available products.</p>
            <p>Check out our latest offerings!</p>
        
            <h2><Link href="products/1">Product 1</Link></h2>
            <h2><Link href="products/2">Product 2</Link></h2>
            <h2><Link href="products/3" replace>Product 3</Link></h2>
            <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
            
            <p>Don't forget to check out our <a href="/blog">blog</a> for the latest updates!</p>
            <p>Visit our <Link href="/">Home</Link> page for more information.</p>

        </div>
    )
}