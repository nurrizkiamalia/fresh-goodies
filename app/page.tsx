import ProductList from "@/components/Products/ProductList"
import { CartProvider } from "@/hook/useCart";

export default function Home() {
  return (
    <CartProvider>
      <div className="px-[18px] pt-5">
        <ProductList />
      </div>
    </CartProvider>
  );
}
