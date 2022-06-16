import React from 'react'
import { PhoneIcon, MailIcon } from '@heroicons/react/outline'
import igPic from '../assets/instagramIcon.png'
import fbPic from '../assets/fbIcon.png'
import ttPic from '../assets/logo-tiktok.svg'

const ContactPage = () => {
  return (
    <div className='contactPage min-h-[100vh] container mx-auto relative flex'>
        <div className="container mx-auto bg-white/[.75] flex flex-col max-w-[50%] max-h-[482px] p-8 my-11">

            <h1 className='my-4 md:text-xl md:font-bold '>
                Not sure about our products?
                
            </h1>

            <h1 className='my-4 md:text-xl md:font-bold'>
                You can reach us on:
            </h1>

            <div className='flex items-center justify-center my-4 md:justify-start'>
                <PhoneIcon className='w-8 mr-3'/>
                <h2 className='md:font-bold md:text-md'>
                    061-123-4567
                </h2>
            </div>

            <div className='hidden items-center my-4 md:flex'>
                <MailIcon className='w-8 mr-3'/>
                <h2 className='md:font-bold md:text-md'>
                    contactus@gymbuddies.com
                </h2>
            </div>

            <div className="flex flex-col items-center justify-between min-h-[50%]">
                <h1 className='mb-4 md:text-4xl md:font-bold '> OUR SOCIAL MEDIA:</h1>
               
                <div className='flex flex-col items-center md:flex-row'>
                    <a href="/#">
                         <img src={fbPic} alt="fb" className='max-h-11 my-2 mx-6' />
                    </a>
                   
                    <a href="/#">
                        <img src={igPic} alt="ig" className='max-h-11 my-2  mx-6'/>
                    </a>

                    <a href="/#">
                        <img src={ttPic} alt="tt" className='max-h-11 my-2  mx-6 '/>
                    </a>       
                </div>
            </div>
        </div>     
    </div>
  )
}

export default ContactPage