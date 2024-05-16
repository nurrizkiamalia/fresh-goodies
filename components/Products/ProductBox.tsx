"use client";

import Image from "next/image";
import useProduct from "@/hook/useProduct";
import garlic from "@/public/products/garlic.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "@/hook/useCart";
import Categories from "../Categories";
import CartFloatBtn from "../Cart/CartFloatBtn";

interface ProductBoxProps {
    openCatalog: (productId: number) => void;
}

const ProductBox: React.FC<ProductBoxProps> = ({ openCatalog }) => {
    const { productBox, category } = useProduct();
    const { addToCart, subtractFromCart, cart } = useCart();
    const [isClicked, setIsClicked] = useState<{ [key: string]: boolean }>({});
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const handleAddWeight = (id: string, defaultWeight: number, price: number) => {
        addToCart(id, price, defaultWeight);
        setIsClicked((prevState) => ({
            ...prevState,
            [id]: true,
        }));
    };

    const handleSubtractWeight = (id: string, defaultWeight: number, price: number) => {
        subtractFromCart(id, price, defaultWeight);
    };

    const convertWeight = (grams: number) => {
        return grams >= 1000 ? `${grams / 1000} kg` : `${grams} g`;
    };

    const filteredProducts = selectedCategory === "All"
        ? productBox
        : productBox.filter((product) => product.category === selectedCategory);

    return (
        <>
        <div>
            <Categories 
                categories={category} 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
            />
        </div>
            
            <div className=" grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 ">
                {filteredProducts.map((item) => {
                    const defaultWeight = item.weight || 0;
                    const price = item.price || 0;
                    const weightVal = cart[item.id]?.weight ?? defaultWeight;
                    const additionalWeight = weightVal - defaultWeight;
                    const totalPrice = (defaultWeight * price) + ((additionalWeight / 100) * price);

                    return (
                        <div key={item.id} className="bg-smokeGray p-[11px] rounded-3xl w-fit">
                            <Image
                                src={item.imageUrl === undefined ? garlic : item.imageUrl}
                                width={100}
                                height={100}
                                alt="image"
                                className="mix-blend-multiply bg-transparent"
                            />
                            <p className="text-pxxl font-bold">{totalPrice.toFixed(2)}</p>
                            <p onClick={() => openCatalog(item.id)} className="cursor-pointer">{item.name}</p>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => handleSubtractWeight(item.id.toString(), defaultWeight, price)}
                                    className={`${
                                        isClicked[item.id] && weightVal > defaultWeight ? "block" : "hidden"
                                    } text-[12px] bg-black text-white p-3 rounded-full`}
                                >
                                    <FaMinus />
                                </button>
                                <input
                                    type="text"
                                    name="weight"
                                    id="weight"
                                    placeholder={convertWeight(defaultWeight)}
                                    className="bg-smokeGray w-[70%]"
                                    value={convertWeight(weightVal)}
                                    readOnly
                                />
                                <button
                                    onClick={() => handleAddWeight(item.id.toString(), defaultWeight, price)}
                                    className={`${
                                        isClicked[item.id] && weightVal != defaultWeight ? "bg-black text-white" : "border-[1px] border-black bg-transparent text-black"
                                    } text-[12px] p-3 rounded-full`}
                                >
                                    <FaPlus />
                                </button>
                            </div>
                        </div>
                    );
                })}
                <CartFloatBtn className="xl:hidden fixed bottom-0 w-[90%] m-0" />
            </div>
        </>
    );
};

export default ProductBox;
