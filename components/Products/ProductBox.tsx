"use client";

import Image from "next/image"
import useProduct from "@/hook/useProduct"
import garlic from "@/public/products/garlic.png"
import { FaPlusCircle } from "react-icons/fa"

const ProductBox: React.FC = () => {

    const { productBox } = useProduct()

    return(
        <>
        {productBox.map((item) => {
            return(

                <div className="bg-smokeGray p-[11px] rounded-3xl ">
                    <Image
                    src={item.imageUrl === undefined ? garlic : item.imageUrl}
                    width={100}
                    height={100}
                    alt="image"
                    className="mix-blend-multiply bg-transparent"
                    />
                    <p className="text-pxxl font-bold">{item.price}</p>
                    <p>{item.name} </p>
                    <div className="flex justify-between items-center">
                        <input type="text" name="weight" id="weight" placeholder="1 kg" className="bg-smokeGray w-[100px] " />
                        <button><FaPlusCircle /></button>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default ProductBox