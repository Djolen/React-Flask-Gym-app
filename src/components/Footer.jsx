import React from 'react'
import logo from '../assets/logo.png'
import igPic from '../assets/instagramIcon.png'
import fbPic from '../assets/fbIcon.png'
import ttPic from '../assets/logo-tiktok.svg'

const Footer = () => {
    return (

        <footer className='min-h-[150px] flex flex-col justify-center items-center p-8 md:flex-row md:justify-between'>
        
            <img src={logo} alt="logoPic" className='max-h-[86px]' />

            <div className="flex flex-col text-4xl">
                <h1>
                    Find Us On
                </h1>

                <div className='flex flex-row'>
                    <a href="/#">
                         <img src={fbPic} alt="fb" className='max-h-11 p-1' />
                    </a>
                   
                    <a href="/#">
                        <img src={igPic} alt="ig" className='max-h-11 p-1'/>
                    </a>

                    <a href="/#">
                        <img src={ttPic} alt="tt" className='max-h-11 p-1'/>
                    </a>       
                </div>
            </div>
            
        </footer>


    )
}

export default Footer