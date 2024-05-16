import { FaSortAlphaDown, FaSearch } from "react-icons/fa"
import Categories from "./Categories"

const Header: React.FC = () => {
    return(
        <>
            <div>
                <div className="flex justify-end gap-3">
                    <button><FaSortAlphaDown /></button>
                    <button><FaSearch /></button>
                </div>
                <h1 className="text-pxxxl font-bold">Vegetables</h1>
            </div>
        </>
    )
}

export default Header