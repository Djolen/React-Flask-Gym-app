import React from 'react'
import dietPlan from '../assets/pizzaIcon.png'
import trainingPlan from '../assets/weightIcon.png'
import consultation from '../assets/consultationIcon.png'

const Banner = () => {
  return (
    <div className='mainBanner flex flex-col items-center justify-between px-6 py-6 bg-[#6b9ae0]/[.70] w-full min-h-[300px] drop-shadow-lg md:flex-row md:py-0'>
        
        {/* FIRST CARD */}
        <div className='flex my-12 mx-6 p-6 flex-col max-h-full rounded-lg bg-[#437694] items-center'>
            <img src={dietPlan} className='w-16 -mt-14' alt="diet" />
            <h1 className='text-lg font-bold '>
                MONTHLY DIET PLAN
            </h1>
            <p className='text-md text-white leading-7'>
                A balanced diet is a diet that contains differing kinds of foods in certain quantities 
                and proportions so that the requirement for calories, proteins, minerals, vitamins 
                and alternative nutrients is adequate and a small provision is reserved for additional nutrients to endure the short length of leanness.
            </p>
        </div>

        {/* SECOND CARD */}

        <div className='flex my-12 mx-6 p-6 flex-col max-h-full rounded-lg bg-[#5fa7d1] items-center'>
            <img src={trainingPlan} className='w-16 -mt-14 bg-white rounded-[50%] p-1' alt="training" />
            <h1 className='text-lg font-bold '>
                WORKOUT PLAN
            </h1>
            <p className='text-md text-white leading-7'>
                Workout plans have many benefits. They can motivate you, teach you new things, 
                and make the whole endeavor of getting regular exercise so much easier. 
                A good workout plan keeps you going and makes you more proficient, 
                both at movement and at building healthy habits.
            </p>
        </div>

        {/* THIRD CARD */}

        <div className='flex my-12 mx-6 p-6 flex-col max-h-full rounded-lg bg-[#437694] items-center'>

            <img src={consultation} className='w-16 -mt-14 bg-white rounded-[50%] p-1 border-4 border-red' alt="consultation" />

            <h1 className='text-lg font-bold '>
                CONSULTATIONS
            </h1>
            <p className='text-md text-white leading-7'>
                What is an Initial Fitness Consultation? 
                Before the training program begins, most trainers conduct an initial consultation. 
                This initial session helps get both the trainer and the client on the same page 
                when setting expectations for the training program and goals for the future.
            </p>
        </div>
    </div>
  )
}

export default Banner;