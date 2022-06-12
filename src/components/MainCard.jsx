import React from 'react'
import cucanj from '../assets/cucanj.mp4'
import slika1 from '../assets/img1.jpg'
import slika2 from '../assets/img2.jpg'
import { useState, useRef } from 'react'



const MainCard = () => {

    const picture = useRef()

    const [picOne, setPicOne] = useState(true)

    const handleClick = () => {
       setPicOne(true)
       picture.current.src = slika1
    }

    const handleClickTwo = () => {
        setPicOne(false)
        picture.current.src = slika2
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

            <img ref={picture} src = {slika1} alt="slika1" className='w-full h-full mb-0 rounded transition duration-300' /> 

            <table className='mainTable table-auto w-full text-center mb-6  font-bold '>
                <tbody>
                    <tr>
                        <td onClick={handleClick} 
                        className={picOne ? 'bg-[#8c8c8d]  transition duration-300 ' : 'hover:bg-[#8c8c8da1] bg-[#DDDCE4] transition duration-300 border border-b-gray-600 border-x-gray-600 '}
                        >
                            1
                        </td>

                        <td onClick={handleClickTwo} 
                        className={!picOne ? 'bg-[#8c8c8d]  transition duration-300 ' : 'hover:bg-[#8c8c8da1] bg-[#DDDCE4] transition duration-300 border border-b-gray-600 border-x-gray-600'}
                        >
                            2
                        </td>
                    </tr>
                </tbody>
            </table>
      </div>  
    </div>
  )
}

export default MainCard 

