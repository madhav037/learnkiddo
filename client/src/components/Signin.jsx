import React, { useState } from 'react'
import Header from './Header'
import bg from '../images/mainbg.png'
import doodle from '../images/doodleleft.png'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    const [userData, setUserData] = useState({});
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
                    <div className='flex' style={backgroundStyle}>
                        <div className='w-3/5 h-full ' style={{ backgroundColor: '#0B1D51', borderRadius: '500px 500px 500px 00px' }}>
                            <div className='w-full h-full  flex flex-col items-center text-slate-400 pt-12 pl-3 pr-20 '>
                                <div className='text-5xl mt-10 font-bold font-serif'>
                                    Log In
                                </div>
                                <form className='flex flex-col gap-3 mt-12 '>
                                    <div className='flex flex-col'>
                                        <label className='text-sm'>Email address</label>
                                        <input type='email' onChange={(e) => {
                                            setUserData({ ...userData, email: e.target.value })
                                        }} placeholder='enter email id' className='text-xs indent-1 mt-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='text-sm'>Password</label>
                                        <input type='password' onChange={(e) => {
                                            setUserData({ ...userData, password: e.target.value })
                                        }} placeholder='enter password' className='text-xs indent-1 mt-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <div className='flex flex-row justify-between mt-10'>
                                        <div className='flex flex-row items-center w-56 h-10'>
                                            <div className='pr-2'>
                                                don't have an account?
                                            </div>
                                            <Link to={'/signup'} className="hover:underline">sign up</Link>
                                        </div>
                                        <div className='flex justify-center pl-6'>
                                            <button onClick={async (e) => {
                                                console.log(userData);
                                                e.preventDefault();
                                                const res = await fetch('/user/login', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify(userData)
                                                }).catch((err) => { console.log(err); })

                                                const result = await res.json();

                                                if (res.status === 200) {
                                                    localStorage.setItem('email', userData.email)
                                                    navigate('/home');
                                                }
                                                else {
                                                    window.alert('Inccorect Data');
                                                }

                                                localStorage.setItem('email', userData.email)
                                            }} className='bg-orange-400 w-36 font-bold h-10 rounded-3xl text-blue-950'>log in</button>
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

export default Signin