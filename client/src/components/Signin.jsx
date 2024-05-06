import React from 'react'
import Header from './Header'
import bg from '../images/mainbg.png'
import doodle from '../images/doodleleft.png'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <div className='h-screen w-screen flex flex-col'>
                <Header />
                <div className='w-full h-full flex justify-center items-center overflow-x-hidden overflow-y-hidden' style={{ backgroundColor: "#b7c0ee" }}>
                    <div className='flex bg-slate-500 h-4/5 w-4/5'>
                        <img className='w-full h-full object-cover' src={bg} />
                        <div className='w-2/4 absolute' style={{ height: 455 }}>
                            <img src={doodle} className='w-full h-full' />
                            <div className='w-full h-full absolute bottom-0 flex flex-col items-center text-slate-400 pt-12 pl-3 pr-20 '>
                                <div className='text-4xl mb-5'>
                                    Log In
                                </div>
                                <form className=''>
                                    <div className='flex flex-col'>
                                        <label for="email">Email address</label>
                                        <input type='email' className='mt-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <br />
                                    <div className='flex flex-col'>
                                        <label for="password">Password</label>
                                        <input type='password' className='mt-1 h-8 block w-full border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent' />
                                    </div>
                                    <br />
                                    <div>
                                        <input type='checkbox' />
                                        <label className='ml-3'>Remember me</label>
                                    </div>
                                    <br />
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row items-center w-56 h-10'>
                                            <div className='pr-2'>
                                                don't have an account?
                                            </div>
                                            <Link to={'/signup'}>sign up</Link>
                                        </div>
                                        <div className='flex justify-center pl-6'>
                                            <button className='bg-orange-400 w-36 h-10 rounded-3xl text-blue-950'>log in</button>
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