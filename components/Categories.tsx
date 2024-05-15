const Categories: React.FC = () => {
    const liStyle=" cursor-pointer  pb-1 focus:border-b-2 border-black hover:border-b-2 active:border-b-2"

    return(
        <>
            <div>
                <ul className="categories flex w-full overflow-x-scroll gap-10">
                    <li className={`border-b-2 ${liStyle}`}>All</li>
                    <li className={liStyle}>Spicy</li>
                    <li className={liStyle}>Dressing</li>
                    <li className={liStyle}>Sweet</li>
                    <li className={liStyle}>Roots</li>
                </ul>
            </div>
        </>
    )
}

export default Categories