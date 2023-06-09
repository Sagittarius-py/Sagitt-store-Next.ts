import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const NavBarDesktop = () => { 
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    let navOffset:number = 75;

    useEffect(() => {
    window.addEventListener("scroll", () =>{
        if(window.pageYOffset >= navOffset){
            setIsScrolled(true)
        }
        if(window.pageYOffset < navOffset){
            setIsScrolled(false)
        }  
    })
    })

    return (
        <div id="navbar" className={`fixed z-50 w-full duration-500 ${isScrolled ? "bg-zinc-950 shadow-lg shadow-orange-500/30" : null}`}>
            <header className="w-[calc(100%-2rem)] h-16 rounded-full mx-4 flex items-center relative justify-between">
                <Link href="/">
                    <h1 className="text-3xl ml-4 rounded-full text-zinc-50" >Sagittarius Treasure</h1>               
                </Link>
                <div className={`flex items-center duration-100 justify-center h-10 px-2 -ml-24 bg-white ${!isScrolled ? "border-2" : null}  rounded-full border-neutral-300 w-1/6`}>
                    <MagnifyingGlassIcon className='w-8 h-8 text-zinc-900'/>
                    <input type='text' className='w-full h-full mx-2 focus:outline-none'></input>
                </div>
                <div className='float-right flex w-32 justify-around'>
                <Profile />
                <ShoppingCart/>
                </div>
                
            </header>
                <div className={`absolute h-1 duration-100 w-[calc(100%-2rem)] bottom-0 flex flex-nowrap mx-4 ${isScrolled ? "opacity-0" : null}`}>
                    <div className="w-1/2 h-1 rounded-l-full bg-gradient-to-l from-orange-700 to-orange-400" ></div>
                    <div className="w-1/2 h-1 rounded-r-full bg-gradient-to-r from-orange-700 to-orange-400"></div>
                </div>
        </div>
        
    )
}

export {NavBarDesktop};