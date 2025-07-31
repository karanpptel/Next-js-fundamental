import { Metadata } from "next"



// 1. Define the props interface correctly, with params as a Promise
interface PageProps {
  params: Promise<{
    productId: string;
  }>;
}

export const generateMetadata = async({params} : PageProps) :  Promise<Metadata> => {
    const { productId } = await params;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${productId}`)
        },100)
    })
    return {
        title: `Product ${title}`
    }
}




// 2. Make the component an 'async' function
// 3. Use 'await' to resolve the params promise
export default async function ProductDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const { productId } = resolvedParams;

  return <div>Product ID: {productId}</div>;
}