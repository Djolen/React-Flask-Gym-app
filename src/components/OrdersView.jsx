import React, { useState, useEffect } from 'react'

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

    return (
        <div className='container mx-auto my-6 relative min-h-[100vh] flex flex-col items-center '>
            {data.map((order,i)=>{
                return  <div className='flex min-w-[250px] flex-col mb-4 md:flex-row'> 
                    <p className='text-4xl text-bold p-6 bg-white ' key={i + (Math.random() * 5000)} > {order[1]} </p> 
                    <p className='text-4xl text-bold p-6 bg-slate-600 ' key={i + (Math.random() * 5000)} > {order[2]} </p> 
                    <p className='text-4xl text-bold p-6 bg-white ' key={i + (Math.random() * 5000)} > {order[3]} </p> 
                    <p className='text-4xl text-bold p-6 bg-slate-600' key={i + (Math.random() * 5000)} > {order[4]} </p> 
                    <p className='text-4xl text-bold p-6 bg-white ' key={i + (Math.random() * 5000)} > {order[5]} </p> 
                    <p className='text-4xl text-bold p-6 bg-slate-600 ' key={i + (Math.random() * 5000)} > {order[6]} </p> 
                    <p className='text-4xl text-bold p-6 bg-white ' key={i + (Math.random() * 5000)} > {order[7]} </p>
                    <p className='viewButton text-4xl text-bold p-6 bg-white text-teal-700' > CONTACT </p>
                    <p className='viewButton text-4xl text-bold p-6 bg-white text-red-600'  > DELETE </p> 
                        </div>
            })}
        </div>
    )
}

export default OrdersView