import React from "react";

interface CategoriesProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    const liStyle = "cursor-pointer pb-1 focus:border-b-2 border-black hover:border-b-2 active:border-b-2";

    return (
        <div>
            <ul className="categories whitespace-nowrap flex w-full overflow-x-scroll gap-10">
                <li 
                    className={`${selectedCategory === "All" ? "border-b-2" : ""} ${liStyle}`} 
                    onClick={() => onSelectCategory("All")}
                >
                    All
                </li>
                {categories.map((category) => (
                    <li 
                        key={category} 
                        className={`${selectedCategory === category ? "border-b-2" : ""} ${liStyle}`} 
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
