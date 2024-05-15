"use client"

import { config } from "@/constants/url"
import { CartItem } from "@/types/cart"
import axios from "axios"
import { useEffect, useState } from "react"

const useCart = () => {
    const [ cart, setCart ] = useState<CartItem>()


    const fetchCart = async() => {
        try{
            const {data} = await axios.get(config.BASE_URL+config.endpoints.cart)
            setCart(data)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCart()
    }, [])
    return{ cart, fetchCart }
}

export default useCart