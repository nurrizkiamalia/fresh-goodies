import { Product } from "./product";

export interface CartItem {
  productId: Product;
  quantity: number;
}

export interface ShoppingCart {
  items: CartItem[];
  addItem(product: Product, quantity: number): void;
  removeItem(productId: number): void;
  updateItemQuantity(productId: number, quantity: number): void;
  subtractItemQuantity(productId: number): void; // Add this line
  getTotalPrice(): number;
}
