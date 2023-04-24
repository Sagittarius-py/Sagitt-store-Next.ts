  // pages/blog/[slug].js
  
  import { useRouter } from 'next/router'
  import {NavBarDesktop} from '../modules/NavBar'
  import MainContainer from '../MainContainer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
  
  export default function Post() {
    const router = useRouter()
    const  productId  = router.query.product

    const [product, setProduct] = useState<any>({})
    console.log(product)

   

    useEffect(() => {
      if(!productId) {
        return;
      }
      const fetchSomethingById = async () => {
        await fetch(`/api/${productId}`).then((res) => res.json()).then((data) => setProduct(data));
      }
      
      fetchSomethingById()
    }, [productId])

    
    if(product)
    {
      return (
      <>
        <NavBarDesktop />
        <MainContainer>
              <div  className='px-8 h-screen'>
                <div id="content" className='bg-zinc-800 h-5/6 p-2 relative'>
                  <h1 className='text-white text-6xl'>{product.product_name}</h1>
                  <div className='w-1/2 h-[calc(100%-4vh)] right-4 top-4 absolute'>   
                      <Image className='object-cover' src={`/product_images/${product._id}_0.jpg`} alt="cokolwiek" fill /> 
                  </div>
                </div>
              </div>
        </MainContainer>
      </>
      )
    } else {return null;}
  }