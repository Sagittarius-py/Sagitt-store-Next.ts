import React, { useState, useEffect  } from 'react'

import ProductContainer from "./modules/ProductContainer"
import Carousel from "./modules/Carousel"


const Landing = () => {
    let [data, setData] = useState<any[]>([])
    let [bannerList, setBannerList] = useState<any[]>([])
    let [size, setSize] = useState<number>()

    useEffect(() => {
        fetch('/api/product_handler/').then((res) => res.json()).then((data) => setData(data));
        fetch('/api/banner_handler/').then((res) => res.json()).then((data) => {setBannerList(data)});
        setSize(window.innerWidth) 
      }, [])
    
    return(
        <div>
            <Carousel bannerList={bannerList}/> 
         
            <ProductContainer data={data}/>
        </div>
    )
}

export default Landing;