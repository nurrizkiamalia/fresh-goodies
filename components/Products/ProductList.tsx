"use client";

import { useState } from "react";
import CartDetail from "../Cart/CartDetail";
import Header from "../Header";
import ProductBox from "./ProductBox";
import Catalog from "@/app/components/Catalog";

const ProductList: React.FC = () => {
    const [showCatalog, setShowCatalog] = useState<boolean>(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const openCatalog = (productId: number) => {
        setSelectedProductId(productId);
        setShowCatalog(true);
    };

    const closeCatalog = () => {
        setShowCatalog(false);
    };

    return (
        <>
            <div className="">
                
                <div className="flex flex-col gap-5">
                    {showCatalog ? (
                        <div className="flex gap-5">
                            <Catalog productId={selectedProductId} closeCatalog={closeCatalog} />
                        </div>
                    ) : (
                        <div className="relative">
                           <Header />
                            <div className="xl:grid xl:grid-cols-3">
                                <div className="overflow-x-hidden flex flex-col gap-5 xl:col-span-2">
                                    <ProductBox openCatalog={openCatalog} />
                                </div>
                                <CartDetail />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductList;
