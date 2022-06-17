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
        /* 
            console.log("entered handlecontact")
            console.log(datakey)
        */
        axios.post("/getcontact",{
             datakey:datakey,
        }).then((res)=>{
            alert("USER CONTACT INFO: " + res.data[0])
            
        })
    }

    const handleDelete = (datakey) =>{
        /* console.log("delete") */

        axios.post("/deleteorder",{
            datakey:datakey,
        }).then((data) =>{
            alert(data.data);
            window.location.reload();
        })
    }

    return (
        <div className='container mx-auto my-6 relative min-h-[100vh] flex flex-col items-center '>

            <div className='hidden mb-4 lg:flex '> 
                <p className='text-4xl text-bold p-6 bg-white '      > Name </p> 
                <p className='text-4xl text-bold p-6 bg-slate-600 '  > Surname </p> 
                <p className='text-4xl text-bold p-6 bg-white '      > Age </p> 
                <p className='text-4xl text-bold p-6 bg-slate-600'   > Weight </p> 
                <p className='text-4xl text-bold p-6 bg-white '      > Diet Plan </p> 
                <p className='text-4xl text-bold p-6 bg-slate-600 '  > Training Plan </p> 
                <p className='text-4xl text-bold p-6 bg-white '      > Consultation </p>
            </div>


            {data.map((order,i)=>{
                return  <div  key={i + (Math.random() * 5000)} className='flex min-w-[250px] flex-col mb-4 md:flex-row '> 
                            <p className='text-4xl text-bold p-6 bg-white '     key={i + (Math.random() * 5000)} > {order[1]} </p> 
                            <p className='text-4xl text-bold p-6 bg-slate-600 ' key={i + (Math.random() * 5000)} > {order[2]} </p> 
                            <p className='text-4xl text-bold p-6 bg-white '     key={i + (Math.random() * 5000)} > {order[3]} </p> 
                            <p className='text-4xl text-bold p-6 bg-slate-600'  key={i + (Math.random() * 5000)} > {order[4]} </p> 
                            <p className='text-4xl text-bold p-6 bg-white '     key={i + (Math.random() * 5000)} > {order[5]} </p> 
                            <p className='text-4xl text-bold p-6 bg-slate-600 ' key={i + (Math.random() * 5000)} > {order[6]} </p> 
                            <p className='text-4xl text-bold p-6 bg-white '     key={i + (Math.random() * 5000)} > {order[7]} </p>
                            <p onClick={() =>handleContact(order[0])}  key={i + (Math.random() * 5000)} className='viewButton text-4xl text-bold p-6 bg-white text-teal-700' > CONTACT </p>
                            <p onClick={() =>handleDelete(order[0])}   key={i + (Math.random() * 5000)} className='viewButton text-4xl text-bold p-6 bg-white text-red-600' > DELETE </p> 
                        </div>
            })}
        </div>
    )
}

export default OrdersView