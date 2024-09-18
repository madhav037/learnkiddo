import React, { useState } from 'react'
import Header from './Header'
import bg from '../images/mainbg.png'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [userData, setUserData] = useState({});
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    const backgroundStyle = {
        backgroundImage: `url(${bg})`,
        width: '80%',
        height: '80%',
        objectFit: 'cover'
    };


    return (
        <>
            <div className='h-screen w-screen flex flex-col'>
                <Header />
                <div className='w-full h-full flex justify-center items-center overflow-x-hidden overflow-y-hidden' style={{ backgroundColor: "#b7c0ee" }}>
                    <div className='flex items-end justify-end' style={backgroundStyle}>
                        <div className='w-3/5 h-full' style={{ backgroundColor: '#0B1D51', borderRadius: '500px 500px 0px 500px' }}>
                            <div className='w-full h-full flex flex-col items-center text-slate-400 pt-12 pl-20 pr-20 '>
                                <div className='text-5xl mb-3 mt-2 font-bold font-serif'>
                                    Sign Up
                                </div>
                                <form className='flex flex-col gap-2 mt-10 '>
                                    <div className='flex flex-col'>
                                        <label className='text-sm'>Username</label>
                                        <input type='text' placeholder='enter username' onChange={(e) => {
                                            setUserData({ ...userData, username: e.target.value })
                                        }} className='mt-1 text-xs indent-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm'>Email</label>
                                        <input type='email' placeholder='enter email id' onChange={(e) => {
                                            setUserData({ ...userData, email: e.target.value })
                                        }} className='mt-1 text-xs indent-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm'>Password</label>
                                        <input type='password' placeholder='enter password' onChange={(e) => {
                                            setUserData({ ...userData, password: e.target.value })
                                        }} className='mt-1 text-xs indent-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <div className='flex flex-row justify-between mt-3'>
                                        <div className='flex flex-row items-center w-52 h-10'>
                                            <div className='pr-2'>
                                                have an account?
                                            </div>
                                            <Link to={'/signin'} className="hover:underline">log in</Link>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button onClick={async (e) => {
                                                console.log(userData);
                                                e.preventDefault();
                                                const res = await fetch('/user/signup', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify(userData)
                                                }).catch((err) => { console.log(err); })

                                                const result = await res.json();

                                                if (res.status === 200) {
                                                    navigate('/signin');
                                                }
                                                else {
                                                    window.alert('Inccorect Data');
                                                }

                                                localStorage.setItem('email', userData.email)
                                            }} type='submit' className='bg-orange-400 w-40 h-10 font-bold rounded-3xl text-blue-950'>sign up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup