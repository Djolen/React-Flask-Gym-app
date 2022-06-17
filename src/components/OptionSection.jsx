import React from 'react'
import secondLogo from '../assets/bbSil.png'

const OptionSection = () => {
  return (
    <div className='container relative mx-auto mb-2 flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='min-w-[50%] flex items-center justify-center mx-auto' >
            <img  className="mainLogo max-w-11" src={secondLogo} alt="logo" />
        </div>

        <div className="container flex flex-col max-w-[50%]">
            <div className="planSection bg-teal-900/[0.8] my-12 p-8 drop-shadow-lg text-center">
                <h1 className=' mb-3 text-lg font-bold'> Loose Weight </h1>
                <p className='leading-6' >
                    Exercise can be an effective lifestyle modification for weight loss, 
                    especially when used in conjunction with dietary modifications to ensure 
                    a consistent caloric deficit over time.
                </p>
            </div>
            <div className=" planSection bg-teal-800/[0.8]  my-12 p-8 drop-shadow-lg text-center">
                <h1 className=' mb-3 text-lg font-bold'> Gain Weight </h1>
                <p className='leading-6'>
                    A new exercise regimen puts stress on your muscle fibers. 
                    This causes small micro tears, also known as micro trauma, and some inflammation. 
                    Those two conditions in your muscle fibers are the reason you may gain some weight.
                </p>
            </div>
            <div className="planSection bg-teal-700/[0.8]  my-12 p-8 drop-shadow-lg text-center ">
                <h1 className=' mb-3 text-lg font-bold'> Get Shredded </h1>
                <p className='leading-6'>
                    Depending on your starting point, getting shredded could take anywhere from three to 12 months or more. 
                    Bodybuilders usually give themselves 12-16 weeks to get in shape for a show,
                    but they're generally already pretty lean.
                </p>
            </div>


        </div>
    </div>
  )
}

export default OptionSection