import React, { useState, useEffect } from 'react'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

import { auth } from '../firebase-config';
import OrdersView from './OrdersView' 

const AdminLogin = () => {

    const [loginEmail, setLoginEmail] = useState("");

    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoggedIn(true)
        });
    
    }, [])


    const handleLogin = async() => {
        try{
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        }
        catch(err){
            alert(err)
        }
        
    }

    const handleLogout = async () =>{
        await signOut(auth)
        setIsLoggedIn(false)
    }

    return (
        <>
        {
        !user && 
        <div className='container mx-auto flex  items-center justify-center min-h-[100vh]'>

            <div className='loginForm container mx-auto flex flex-col items-center justify-end'>
                <h3 className='text-xl font-bold my-3'> You are admin ? Login here</h3>
                <input onChange={(e)=>{setLoginEmail(e.target.value)}} className='m-3 p-6' type="text" placeholder='email...'  />
                <input onChange={(e)=>{setLoginPassword(e.target.value) }} className='m-3 p-6' type="password" placeholder='password...' />
                <button onClick={handleLogin} className='bg-white'> Login</button>
            </div>

        </div>
        }
        {
        user &&
            <>
                <div className='flex flex-col justify-center items-center my-6' >
                    <p className='text-md font-bold'> Logged in as: {user.email} </p>
                    <OrdersView logoutFunction = {handleLogout} loginCheck={isLoggedIn}/>
                </div>
            </>
        }
        </>
    )
}

export default AdminLogin