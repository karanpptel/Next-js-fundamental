"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        alert('Order placed successfully!');
        router.push('/'); // it will navigate to the home page
        //router.replace('/'); it will replace the current url 
        //router.forward('/'); it will forward the current url
        //router.back();  it will go back to the previous url
    };
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </div>
    );
}