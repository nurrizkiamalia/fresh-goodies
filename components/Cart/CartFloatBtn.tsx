"use client";

import useCart from "@/hook/useCart";
import useProduct from "@/hook/useProduct";

const CartFloatBtn: React.FC = () => {

    const { cart } = useCart()
    const { productBox } = useProduct()

    return(
        <>
            <div className="bg-black fixed bottom-0 right-0 mb-5 w-full text-white rounded-full py-3 px-5">
                <p className="flex justify-between cursor-pointer">To cart  
                <span> </span>
                </p>
            </div>
        </>
    )
}

export default CartFloatBtn