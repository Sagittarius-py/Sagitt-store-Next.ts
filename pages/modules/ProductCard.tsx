import Image from 'next/image'
import React, { useRef, useLayoutEffect, useState } from "react";
import Link from 'next/link';


const convertPrice = (price:any) => {
    

    const priceSplitted = price?.toString().split(".");
    if(priceSplitted?.length > 1){
    if(priceSplitted[1]?.length < 2){
        price+="0"
    }}


    return price;
}

const ProductCard = (props:any) => {
    let product = props?.product;
    let id = product?._id;
    let name = product?.product_name;
    let price = convertPrice(product?.product_price);
    let desc = product?.product_description;

    let shadow = "shadow-[0_0px_30px_0px_rgb(0,0,0,0.25)]"

    return(
        <div className={`z-40 m-4 relative duration-100 ${shadow} hover:shadow-orange-400/20 bg-neutral-50 h-[26rem] w-80 max-w-[600px] rounded-xl group/item`} >
            <div className='relative w-full h-3/5'>
                <Image className='object-cover rounded-t-xl' src={`/product_images/${id}_0.jpg`} alt={name} fill sizes="(max-width: 570px), (max-width: 340px), 20vw"/>
            </div>
            <h1 className='mt-1 ml-4 text-2xl'>{name}</h1>
            
            <p className='mx-2 text-sm'>{desc? desc.slice(0,100) :null}{desc ? desc.length > 100 ? "..." : null : null}</p>
            <h3 className='absolute text-lg font-semibold left-4 bottom-2'>{price}zł</h3>
            <div className='w-0 group-hover/item:w-auto absolute right-2 bottom-2 overflow-hidden duration-100'>
                <Link className=' bg-orange-500 p-1 rounded-md  hover:text-white duration-100' href={`/products/${id}` }>Check it out</Link>
            </div>
        </div>
    )
}

export default ProductCard;