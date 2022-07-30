import React from 'react'
import cucanj from '../assets/cucanj.mp4'
import slika1 from '../assets/img1.jpeg'
import slika2 from '../assets/img2.jpg'
import slika3 from '../assets/img3.jpg'
import slika4 from '../assets/img4.jpg'
import { useState, useRef } from 'react'



const MainCard = () => {

    const [picOne, setPicOne] = useState(true)
    const [picTwo, setPicTwo] = useState(false)
    const [picThree, setPicThree] = useState(false)
    const [picFour, setPicFour] = useState(false)

    const picture = useRef()

    const handleClick = () => {
        picture.current.src = slika1
        setPicOne(true); setPicTwo(false); setPicThree(false); setPicFour(false);
    }

    const handleClickTwo = () => {
        picture.current.src = slika2
        setPicOne(false); setPicTwo(true); setPicThree(false); setPicFour(false);
    }

    const handleClickThree = () => {
        picture.current.src = slika3
        setPicOne(false); setPicTwo(false); setPicThree(true); setPicFour(false);
    }

    const handleClickFour = () => {
        picture.current.src = slika4
        setPicOne(false); setPicTwo(false); setPicThree(false); setPicFour(true);
    }


  return (
    <div className='relative container mx-auto mt-12 flex flex-col content-center items-center mainCard'>

        {/* CARD WRAPPER */}

        <div className='container flex flex-col content-center items-center lg:flex-row'>

        {/* FIRST CARD */}

            <div className='bg-white rounded p-4  m-4 text-center drop-shadow-lg '>
                <h1 className='text-2xl bold mb-4'> IMPROVE YOUR TECHNIQUE WITH US </h1>
                <p>
                    Maintaining proper form won't only help athletes to avoid injury—it will actually make the workout itself feel easier. 
                    Bad technique isn't only frowned upon because it can cause accidents; 
                    it also forces the athlete to do more work than they need to.
                </p>
            </div> 

            {/* SECOND CARD */}

            <div  className='bg-white rounded p-4  m-4 mx-4 text-center drop-shadow-lg '>
                <h1 className='text-2xl bold mb-4'>LIFT HIGHER WRIGHTS</h1>
                <p>
                    Heavy weights increase the power and strength of your muscles without significantly adding bulk or size, especially for women.
                    This means that everyday physical tasks get easier, and consistent training will increase the amount of weight you can lift. 
                    You'll look stronger, too.
                </p>
            </div>
        </div>

        {/* BOTTOM TEXT */} 

        <div className='hidden text-center mx-2 md:flex '>
            <h1 className='text-4xl text-white mt-8'>
                WITH OUR PLAN, YOU ARE GUARANTEED RESULTS IN JUST 90 DAYS!
            </h1>
        </div>

        {/* VIDEO */}

        <div className='my-6 mx-4 '>
            <video className='rounded' src={cucanj} autoPlay loop muted></video>
        </div>

        {/* CARAUSEL */}

        <div className='flex flex-col items-center content-between mx-4'>
            <img ref={picture} src = {slika1} alt="slika1" className='w-[850px] h-[400px] mb-0 rounded transition duration-300' /> 

            <div className='flex  justify-between items-center w-full h-full '>
                <div onClick={handleClick}   className={picOne ? 'slideButton  bg-teal-600 activePic' : 'slideButton  bg-teal-600'} >1</div>
                <div onClick={handleClickTwo} className={picTwo ? 'slideButton  bg-slate-500 activePic' : 'slideButton  bg-slate-500'}>2</div>
                <div onClick={handleClickThree} className={picThree ? 'slideButton  bg-teal-600 activePic' : 'slideButton  bg-teal-600'}>3</div>
                <div onClick={handleClickFour} className={picFour ? 'slideButton  bg-slate-500 activePic' : 'slideButton  bg-slate-500'}>4</div>
            </div>
        </div>  
    </div>
  )
}

export default MainCard 

