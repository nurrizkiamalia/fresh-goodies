import ProductBox from "./ProductBox"

const ProductList: React.FC = () => {
    return(
        <>
            <div className="flex flex-col gap-5 pt-5 ">
                <ProductBox />
            </div>
        </>
    )
}

export default ProductList