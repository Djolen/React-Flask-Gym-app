import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OrdersView = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("/recieveorders").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    },[])

    const handleContact = (datakey) =>{

        axios.post("/getcontact",{
             datakey:datakey,
        }).then((res)=>{
            alert("USER CONTACT INFO: " + res.data[0])
            
        })
    }

    const handleDelete = (datakey) =>{

        axios.post("/deleteorder",{
            datakey:datakey,
        }).then((data) =>{
            alert(data.data);
            window.location.reload();
        })
    }

    return (
        <div className='container mx-auto my-6 pt-6 relative min-h-[100vh] flex flex-col items-center '>

            <div className='flex flex-col container bg-slate-500/[.75] drop-shadow-lg p-2'>

                <div className='w-[100%] flex items-center justify-center flex-col mb-4 md:flex-row '> 
                    <p className='text-md xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[14.3%] '      > Name </p> 
                    <p className='text-md xl:text-2xl text-bold p-6 bg-slate-600 w-[100%] md:w-[14.3%] '  > Surname </p> 
                    <p className='text-md xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[14.3%] '      > Age </p> 
                    <p className='text-md xl:text-2xl text-bold p-6 bg-slate-600 w-[100%] md:w-[14.3%]'   > Weight </p> 
                    <p className='text-md xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[14.3%] '      > Diet Plan </p> 
                    <p className='text-md xl:text-2xl text-bold p-6 bg-slate-600 w-[100%] md:w-[14.3%]'   > TrainingPlan </p> 
                    <p className='text-md xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[14.3%] '      > Consultation </p> 
                </div> 

                
                {data.map((order,i)=>{
                    return  <div  key={i + (Math.random() * 5000)} className=' w-[100%] flex items-center justify-center flex-col mb-4 md:flex-row '> 
                                <p className='text-lg xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[11.1%]'     key={i + (Math.random() * 5000)} > {order[1]} </p> 
                                <p className='text-lg xl:text-2xl text-bold p-6 bg-slate-600 w-[100%] md:w-[11.1%]' key={i + (Math.random() * 5000)} > {order[2]} </p> 
                                <p className='text-lg xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[11.1%]'     key={i + (Math.random() * 5000)} > {order[3]} </p> 
                                <p className='text-lg xl:text-2xl text-bold p-6 bg-slate-600 w-[100%] md:w-[11.1%]'  key={i + (Math.random() * 5000)} > {order[4]} </p> 
                                <p className='text-lg xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[11.1%]'     key={i + (Math.random() * 5000)} > {order[5]} </p> 
                                <p className='text-lg xl:text-2xl text-bold p-6 bg-slate-600 w-[100%] md:w-[11.1%]' key={i + (Math.random() * 5000)} > {order[6]} </p> 
                                <p className='text-lg xl:text-2xl text-bold p-6 bg-white w-[100%] md:w-[11.1%]'     key={i + (Math.random() * 5000)} > {order[7]} </p>
                                <p className='w-[100%] md:max-w-[11.1%] viewButton text-lg xl:text-2xl text-bold p-6 bg-white text-teal-700' onClick={() => handleContact(order[0])}  key={i + (Math.random() * 5000)}  > CONTACT </p>
                                <p className='w-[100%] md:max-w-[11.1%] viewButton text-lg xl:text-2xl text-bold p-6 bg-white text-red-600' onClick={() => handleDelete(order[0])}   key={i + (Math.random() * 5000)}  > DELETE </p> 
                            </div>
                })}
                </div>
            </div>

    )
}

export default OrdersView