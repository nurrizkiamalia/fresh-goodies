import Header from "@/components/Header";
import ProductList from "@/components/Products/ProductList";
import Catalog from "./components/Catalog";
import CartFloatBtn from "@/components/Cart/CartFloatBtn";

export default function Home() {
  return (
    <>
      <div className="px-[18px] pt-5">
        <Header />
        <ProductList />
        {/* <Catalog /> */}
        <CartFloatBtn />
      </div>
    </>
  );
}
