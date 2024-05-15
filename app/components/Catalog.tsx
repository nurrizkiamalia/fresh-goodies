import Image from "next/image"
import garlic from "@/public/products/garlic.png"
import { FaArrowLeft, FaArrowRight, FaPlus, FaMinus, FaHeart } from "react-icons/fa"
import useProduct from "@/hook/useProduct"

const Catalog: React.FC = () =>{

    const { productBox } = useProduct()
    
    return(
        <>
            <div className="flex flex-col gap-10">
                <div className="flex justify-between">
                    <button><FaArrowLeft /> </button>
                    <Image 
                    src={garlic}
                    alt="garlic"
                    />
                    <button><FaArrowRight /> </button>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[31px] font-semibold ">Garlic</h2>
                    <p className="text-[17px] font-medium ">In 100 grams</p>
                    <div className="flex justify-between border-[1px] border-gray-300 rounded-3xl py-[19px] px-[27px] ">
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">143</p>
                            <p className="text-gray-400">calorie</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">6.5</p>
                            <p className="text-gray-400">proteins</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">0.5</p>
                            <p className="text-gray-400">fats</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="font-semibold">29.9</p>
                            <p className="text-gray-400">carbs</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between gap-3 w-full">
                        <div className="bg-smokeGray rounded-full  p-3 flex justify-between">
                            <button><FaMinus className="text-[12px]" /> </button>
                            <input type="text" placeholder="1 kg" name="weight" id="weight" className="bg-transparent w-[70%] " />
                            <button><FaPlus className="text-[12px] text-center" /> </button>
                        </div>
                        <button className="px-5 bg-smokeGray rounded-full"><FaHeart className="text-[12px]" /> </button>
                    </div>
                    <div className="bg-black text-white rounded-full py-3 px-5">
                        <p className="flex justify-between cursor-pointer">To cart  
                        <span> $27.3 </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog