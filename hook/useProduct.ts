"use client";

import { config } from "@/constants/url";
import { Product } from "@/types/product";
import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
    const [ productBox, setProductBox ] = useState<Product[]>([])
    const [ category, setCategory ] = useState<string[]>([])

    const fetchProduct = async() => {
        try{
            const { data } = await axios.get(config.BASE_URL+config.endpoints.products)
            const data2 = data.json as Product[]

            const categories = new Set(data.map(productBox => productBox.category))
            setCategory(Array.from(categories))
            setProductBox(data)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return { productBox, fetchProduct }
}

export default useProduct