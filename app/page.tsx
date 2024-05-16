// pages/page.tsx
import Header from "@/components/Header";
import ProductList from "@/components/Products/ProductList";
import CartFloatBtn from "@/components/Cart/CartFloatBtn";
import { CartProvider } from "@/hook/useCart";
import Catalog from "./components/Catalog";

export default function Home() {
  return (
    <CartProvider>
      <div className="px-[18px] pt-5">
        <ProductList />
      </div>
    </CartProvider>
  );
}
