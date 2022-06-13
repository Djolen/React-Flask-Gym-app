import React from 'react';
import logo from '../assets/logo.png'
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [ nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)


    return (
        <div className={!nav ? '' : 'mb-40'}>

            <div className='navBar relative container p-6 h-36 max-w-full flex items-center justify-between bg-[#F8F8FC] drop-shadow-lg '>

                <img src={logo}  className='max-h-full' alt='logoImage'></img>

                <div className='hidden font-bold lg:flex'>
                    <h1 className='text-4xl'>GYM BUDDIES</h1>
                </div>

                <div className='hidden space-x-6 mr-6 md:flex'>
                    <Link to='/' className='hover:text-[#9c91e4] transition duration-200'> HOME</Link>
                    <Link to='/PRODUCTS' className='hover:text-[#9c91e4] transition duration-200'> BUY PRODUCTS</Link>
                    <Link to='/#' className='hover:text-[#9c91e4] transition duration-200'> CONTACT US</Link>
                </div>

                {!nav ? <MenuIcon onClick={handleClick} className='w-8 sm:w-12 md:hidden'></MenuIcon> :   <XIcon onClick={handleClick} className='w-8 sm:w-12 md:hidden'></XIcon>}
                
            </div>

            <div className={!nav ? 'hidden' : 'absolute bg-[#F8F8FC] block w-full p-3 mb-14 '}>
                <a href='/#' className='hover:text-[#9c91e4] transition duration-200 border-b-2 border-zinc-200 block '> HOME</a>
                <a href='/#' className='hover:text-[#9c91e4] transition duration-200 border-b-2 border-zinc-200 block '> BUY PRODUCTS</a>
                <a href='/#' className='hover:text-[#9c91e4] transition duration-200 border-b-2 border-zinc-200 block '> CONTACT US</a>
            </div>

        </div>
    );
};




export default Navbar;
