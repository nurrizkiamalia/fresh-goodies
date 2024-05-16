// useCart.tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { config } from "@/constants/url";

interface CartItem {
    quantity: number;
    weight: number;
    price: number;
}

interface CartContextType {
    cart: { [key: string]: CartItem };
    addToCart: (id: string, price: number, defaultWeight: number) => void;
    subtractFromCart: (id: string, price: number, defaultWeight: number) => void;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<{ [key: string]: CartItem }>({});

    const fetchCart = async () => {
        try {
            const { data } = await axios.get(config.BASE_URL + config.endpoints.cart);
            setCart(data);
        } catch (err) {
            console.error(err);
        }
    };

    const updateCartItem = async (id: string, quantity: number) => {
        try {
            await axios.post(config.BASE_URL + config.endpoints.cart, { productId: id, quantity });
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCartItem = async (id: string) => {
        try {
            await axios.delete(config.BASE_URL + config.endpoints.cart, { data: { productId: id } });
        } catch (err) {
            console.error(err);
        }
    };

    const addToCart = (id: string, price: number, defaultWeight: number) => {
        setCart((prevCart) => {
            const currentItem = prevCart[id] || { quantity: 0, weight: defaultWeight, price: 0 };
            const newWeight = currentItem.weight + 100;
            const additionalWeight = newWeight - defaultWeight;
            const newPrice = (defaultWeight * price) + ((additionalWeight / 100) * price);

            updateCartItem(id, currentItem.quantity + 1);

            return {
                ...prevCart,
                [id]: {
                    quantity: currentItem.quantity + 1,
                    weight: newWeight,
                    price: newPrice,
                },
            };
        });
    };

    const subtractFromCart = (id: string, price: number, defaultWeight: number) => {
        setCart((prevCart) => {
            const currentItem = prevCart[id] || { quantity: 0, weight: defaultWeight, price: 0 };
            if (currentItem.quantity === 0) return prevCart;
            const newWeight = currentItem.weight - 100;
            const additionalWeight = newWeight - defaultWeight;
            const newPrice = ( defaultWeight * price) + ((additionalWeight / 100) * price);

            if (newWeight <= defaultWeight) {
                deleteCartItem(id);
                return {
                    ...prevCart,
                    [id]: {
                        quantity: 0,
                        weight: defaultWeight,
                        price: 0,
                    },
                };
            } else {
                updateCartItem(id, currentItem.quantity - 1);
                return {
                    ...prevCart,
                    [id]: {
                        quantity: currentItem.quantity - 1,
                        weight: newWeight,
                        price: newPrice,
                    },
                };
            }
        });
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const totalPrice = Object.values(cart).reduce((acc, item) => acc + (item.price || 0), 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, subtractFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
