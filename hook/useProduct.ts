"use client";

import { config } from "@/constants/url";
import { Product } from "@/types/product";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductGroup {
  [key: string]: Product[];
}

const useProduct = () => {
  const [productBox, setProductBox] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [productGroup, setProductGroup] = useState<ProductGroup>({});

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(config.BASE_URL + config.endpoints.products);
      const dataRsp = data as Product[];

      const categoriesArr = new Set(dataRsp.map((product) => product.category));
      const groupData: ProductGroup = {};

      categoriesArr.forEach((category) => {
        const currentCategory = dataRsp.filter((product) => product.category === category);
        groupData[category] = currentCategory;
      });

      setProductGroup(groupData);
      setCategory(Array.from(categoriesArr));
      setProductBox(dataRsp);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return { productBox, productGroup, category };
};

export default useProduct;
