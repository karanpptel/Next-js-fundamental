
// function getNumberInt(count: number){
//     return Math.floor(Math.random() * count);
// }

export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const random = getNumberInt(2);
    // if (random === 1) {
    //     throw new Error('Error Loading Product');
    // }
    return (
        <>
            <h2>Product Details Layout or product layout</h2>
            {children}
        </>
    )
}

// here an children prop is corresponding to the productId page.TSX