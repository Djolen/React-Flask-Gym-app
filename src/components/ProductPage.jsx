import React from 'react'
import axios from 'axios'


const ProductPage = () => {
  return (
    <div className='productsOrder container mx-auto min-h-[100vh] '>
        <div className='container mx-auto my-9 w-[70%] h-[70%] '>
            <form className='bg-[#fff]/[.75] flex flex-col justify-center items-start mx-auto p-11 h-full w-full drop-shadow-xl md:items-start '>      
                <div className=' flex flex-col justify-center items-start '>
                    <label className='text-4xl font-bold py-3 mr-12' htmlFor="nameInput"> Insert name: </label>
                    <input className='mb-6 bg-slate-500 border-b-4 border-blue-500  p-2 text-lg transition duration-[0.7s] focus:border-blue-700 focus:outline-0 focus:opacity-[70%]' type="text" name="nameInput" id="" />
                </div>

                <div className=' flex  flex-col justify-center items-start '>
                    <label className='text-4xl font-bold py-3' htmlFor="surnameInput"> Insert surname: </label>
                    <input className='mb-6 bg-slate-500 border-b-4 border-blue-500  p-2 text-lg transition duration-[0.7s] focus:border-blue-700 focus:outline-0 focus:opacity-[70%]' type="text" name="surnameInput" id="" />
                </div>

                <div className=' flex  flex-col justify-center items-start '>
                    <label className='text-4xl font-bold py-3 ' htmlFor="ageInput"> Insert age: </label>
                    <input className='mb-6 bg-slate-500 border-b-4 border-blue-500  p-2 text-lg transition duration-[0.7s] focus:border-blue-700 focus:outline-0 focus:opacity-[70%]' type="number" name="ageInput" id="" />
                </div>

                <div className=' flex  flex-col justify-center items-start '>
                    <label className='text-4xl font-bold py-3 ' htmlFor="weightInput"> Insert weight: </label>
                    <input className='mb-6 bg-slate-500 border-b-4 border-blue-500  p-2 text-lg transition duration-[0.7s] focus:border-blue-700 focus:outline-0 focus:opacity-[70%]' type="number" name="weightInput" id="" />
                </div>

                <div className=' flex  flex-col justify-center items-start '>
                    <label className='text-4xl font-bold py-3 ' htmlFor="optionSelect"> Choose option: </label>
                    <div className="flex items-center mb-2">
                        <input type="checkbox" name="option1" id="option1" value='Diet plan' className='mr-3' /> Diet plan
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="checkbox" name="option2" id="option2" value='Training plan' className='mr-3' /> Training plan
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="checkbox" name="option3" id="option3" value='Consultations plan' className='mr-3' /> Consultations plan
                    </div>
                </div>

                <button className='mt-3 p-3 text-lg font-bold min-w-[20%] bg-white transition duration-[0.7s] hover:opacity-[60%] ' > Submit </button>
            </form>
        </div>
    </div>
  )
}

export default ProductPage