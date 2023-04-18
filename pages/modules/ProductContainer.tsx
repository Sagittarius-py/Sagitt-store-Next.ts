import ProductCard from "./ProductCard"

const ProductContainer = (props:any) => {
    if(ProductCard){
    const data = props.data

    return(
        <div className="">
        <hr className="h-1 mx-auto my-4 bg-gray-100 border-0 rounded w-[calc(80vw-2rem)] md:my-10 dark:bg-orange-700"/>
       
        <div className="flex mx-auto flex-wrap justify-around mt-10 min-h-[50vh] w-[90vw]">
            {data ? data.map((elem:any, key:number) => {return(<ProductCard key={key} product={elem}/>) }) : null}
        </div>
        </div>

    )}
    return null;
}

export default ProductContainer;