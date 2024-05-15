import ProductBox from "./ProductBox"

const ProductList: React.FC = () => {
    return(
        <>
            <div className="grid grid-cols-2 gap-5 pt-5 ">
                <ProductBox />
            </div>
        </>
    )
}

export default ProductList