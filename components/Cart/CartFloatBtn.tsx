// CartFloatBtn.tsx
"use client";

import { useCart } from "@/hook/useCart";

interface CartBtn{
    className?: string
}

const CartFloatBtn: React.FC<CartBtn> = ({className}) => {
    const { totalPrice } = useCart();

    const displayedTotalPrice = typeof totalPrice === 'number' ? totalPrice.toFixed(2) : '0.00';

    return (
        <p className={`bg-black bottom-0 mb-5 w-full text-white rounded-full py-3 px-5 flex justify-between cursor-pointer ${className}`}>
                To cart  
                <span>{`$${displayedTotalPrice}`}</span>
        </p>
    );
};

export default CartFloatBtn;
