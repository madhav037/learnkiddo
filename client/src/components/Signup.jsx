import React from 'react'
import Header from './Header'
import bg from '../images/mainbg.png'
import doodle from '../images/bluedoodle.png'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='h-screen w-screen flex flex-col'>
                <Header />
                <div className='w-full h-full flex justify-center items-center overflow-x-hidden overflow-y-hidden' style={{ backgroundColor: "#b7c0ee" }}>
                    <div className='flex bg-slate-500 h-4/5 w-4/5'>
                        <img className='w-full h-full object-cover' src={bg} />
                        <div className='w-2/4 absolute right-32' style={{ height: 455 }}>
                            <img src={doodle} className='w-full h-full' />
                            <div className='w-full h-full absolute bottom-0 flex flex-col items-center text-slate-400 pt-12 pl-20 pr-20 '>
                                <div className='text-4xl mb-5'>
                                    Sign Up
                                </div>
                                <form className=''>
                                    <div className='flex flex-col'>
                                        <label for="email">Email address</label>
                                        <input type='email' className='mt-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <br />
                                    <div className='flex flex-row justify-between'>
                                        <div className='w-1/2 pr-2'>
                                            <label for="password">Password</label>
                                            <input type='email' className='mt-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                        </div>
                                        <div className='w-1/2 pl-2'>
                                            <label for="password">Confirm password</label>
                                            <input type='email' className='mt-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                        </div>
                                    </div>
                                    Use 8 or more characters with a mix of letters, numbers & symbols
                                    <br />
                                    <br />
                                    <div>
                                        <input type='checkbox' />
                                        <label className='ml-3'>Remember me</label>
                                    </div>
                                    <br />
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row items-center w-52 h-10'>
                                            <div className='pr-2'>
                                                have an account?
                                            </div>
                                            <Link to={'/'}>log in</Link>
                                        </div>
                                        <div className='flex justify-center'>
                                            <button className='bg-orange-400 w-40 h-10 rounded-3xl text-blue-950'>sign up</button>
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