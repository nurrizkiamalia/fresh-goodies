"use client";

import Image from "next/image";
import garlic from "@/public/products/garlic.png";
import { FaArrowLeft, FaArrowRight, FaPlus, FaMinus, FaHeart, FaGripLines } from "react-icons/fa";
import useProductDetail from "@/hook/useProductDetail";
import CartFloatBtn from "@/components/Cart/CartFloatBtn";

interface CatalogProps {
    productId: number | null;
    closeCatalog: () => void;
}

const Catalog: React.FC<CatalogProps> = ({ productId, closeCatalog }) => {
    const { currentProduct, getNextProduct, getPreviousProduct } = useProductDetail(productId);

    return (
        <div className="m-auto flex justify-center">
            <div className="flex flex-col gap-10 w-full">
                <button onClick={closeCatalog} className="self-center"><FaGripLines /> </button>
                <div className="flex justify-between">
                    <button onClick={getPreviousProduct}><FaArrowLeft /> </button>
                    <Image 
                        src={currentProduct?.imageUrl === undefined ? garlic : currentProduct.imageUrl}
                        width={200}
                        height={200}
                        alt={currentProduct?.name || "garlic"}
                    />
                    <button onClick={getNextProduct}><FaArrowRight /> </button>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[31px] font-semibold ">{currentProduct?.name} </h2>
                    <p className="text-[17px] font-medium ">In {currentProduct?.metadata?.weight} grams</p>
                    <div className="flex justify-between border-[1px] border-gray-300 rounded-3xl py-[19px] px-[27px] ">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">{currentProduct?.metadata?.calorie}</p>
                            <p className="text-gray-400">calorie</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">{currentProduct?.metadata?.proteins}</p>
                            <p className="text-gray-400">proteins</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">{currentProduct?.metadata?.fats}</p>
                            <p className="text-gray-400">fats</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">{currentProduct?.metadata?.carbs}</p>
                            <p className="text-gray-400">carbs</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between gap-3 w-full">
                        <div className="bg-smokeGray rounded-full p-3 flex justify-between">
                            <button><FaMinus className="text-[12px]" /> </button>
                            <input type="text" placeholder={`${currentProduct?.weight}`} name="weight" id="weight" className="bg-transparent w-[70%] " />
                            <button><FaPlus className="text-[12px] text-center" /> </button>
                        </div>
                        <button className="px-5 bg-smokeGray rounded-full"><FaHeart className="text-[12px]" /> </button>
                    </div>
                    <div className="flex justify-center w-full xl:h-fit">
                        <CartFloatBtn className="xl:relative xl:flex justify-between relative " />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
