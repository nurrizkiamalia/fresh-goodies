// CartFloatBtn.tsx
"use client";

import { useCart } from "@/hook/useCart";

const CartFloatBtn: React.FC = () => {
    const { totalPrice } = useCart();

    console.log("Total Price:", totalPrice); // Debugging log

    const displayedTotalPrice = typeof totalPrice === 'number' ? totalPrice.toFixed(2) : '0.00';

    return (
        <div className="bg-black fixed bottom-0 right-0 mb-5 w-full text-white rounded-full py-3 px-5">
            <p className="flex justify-between cursor-pointer">
                To cart  
                <span>{`$${displayedTotalPrice}`}</span>
            </p>
        </div>
    );
};

export default CartFloatBtn;
