import { FaCarSide, FaMinus, FaPlus, FaWindowClose } from "react-icons/fa"
import Image from "next/image"
import beetles from "@/public/products/beetles.png"

const CartDetail: React.FC = () => {
    return(
        <>
            <div className="lg:w-[30%] lg:flex lg:fixed lg:right-0  hidden p-5 border-[1px] gap-5 border-gray-300 rounded-xl flex-col items-stretch lg:h-[80vh] overflow-y-scroll ">
                <button className="xl:hidden"> <FaWindowClose /> </button>
                <h2 className="text-pxxxl font-bold">Cart</h2>
                <div className="flex gap-5 items-center xl:flex-col xl:items-stretch">
                    <FaCarSide className="text-pxxxl" />
                    <div className="flex flex-col gap-3">
                        <p>Before free shipping <span className="font-bold">$1.67</span></p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-neonCyan text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[45%] "> 45%</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-1 items-center">
                        <Image
                        src={beetles}
                        alt="image"
                        />
                        <div className="flex flex-col gap-3">
                            <p className="font-semibold">Beetles</p>
                            <div className="flex justify-between items-center gap-3">
                                <button
                                    className={` border-[1px] border-black bg-transparent text-black text-[12px] p-3 rounded-full`}
                                >
                                    <FaMinus />
                                </button>
                                <input
                                    type="text"
                                    name="weight"
                                    id="weight"
                                    placeholder="1kg"
                                    className="bg-smokeGray w-[100%]"
                                    value=""
                                    readOnly
                                />
                                <button
                                    className={` border-[1px] border-black bg-transparent text-black text-[12px] p-3 rounded-full`}
                                >
                                    <FaPlus />
                                </button>
                                <p className="font-medium text-gray-500">$5.1</p>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default CartDetail