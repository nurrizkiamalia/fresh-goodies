import { createContext } from "react";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";

interface ProductContextType{
    products: Product[];
    cartItems: CartItem[];
    setProducts: (products: Product[]) => void;
    setCartItems: (cartItems: CartItem[]) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export default ProductContext