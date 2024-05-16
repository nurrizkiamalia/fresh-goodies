"use client";

import { config } from "@/constants/url";
import { Product } from "@/types/product";
import axios from "axios";
import { useEffect, useState } from "react";

const useProductDetail = (productId: number | null) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(config.BASE_URL + config.endpoints.products);
            const productList = data as Product[];
            setProducts(productList);
            if (productId !== null) {
                const initialProduct = productList.find(product => product.id === productId) || productList[0];
                setCurrentProduct(initialProduct);
            } else if (productList.length > 0) {
                setCurrentProduct(productList[0]);
            }
        } catch (error) {
            console.error("Failed to fetch product data:", error);
        }
    };

    const getNextProduct = () => {
        if (currentProduct && products.length > 0) {
            const currentIndex = products.findIndex(product => product.id === currentProduct.id);
            const nextIndex = (currentIndex + 1) % products.length;
            setCurrentProduct(products[nextIndex]);
        }
    };

    const getPreviousProduct = () => {
        if (currentProduct && products.length > 0) {
            const currentIndex = products.findIndex(product => product.id === currentProduct.id);
            const previousIndex = (currentIndex - 1 + products.length) % products.length;
            setCurrentProduct(products[previousIndex]);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [productId]);

    return { currentProduct, getNextProduct, getPreviousProduct };
};

export default useProductDetail;
