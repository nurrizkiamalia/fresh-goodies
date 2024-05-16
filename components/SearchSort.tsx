import { FaSortAlphaDown, FaSearch } from "react-icons/fa"

const SearchSort: React.FC = () =>{
    return(
        <div className="flex justify-end gap-3">
            <button><FaSortAlphaDown /></button>
            <button><FaSearch /></button>
        </div>
    )
}

export default SearchSort