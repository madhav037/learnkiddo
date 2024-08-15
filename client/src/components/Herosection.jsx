import React from 'react'
import Header from './Header'
import hero from '../images/herosection.png'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Herosection = () => {
    const background = {
        background: `url(${hero}) no-repeat center center / cover fixed`
    }

    const navigate = useNavigate();

    return (
        <>
            <div className='w-screen h-screen flex flex-col'>
                <Header />
                <div className='w-full h-full' style={background}>
                    <div className='w-full h-full bg-blue-950 opacity-90 flex justify-center items-center'>
                        <div className='w-4/5 h-4/5 flex flex-col justify-center'>
                            <div className='flex justify-center text-6xl text-orange-500 font-bold'>
                                Start a Coding journey
                            </div>
                            <div className='flex justify-center text-center text-white text-xl mt-6'>
                                Learn Kiddo is your one-stop destination for language learning and coding mastery. Dive into a world of curated language videos and playlists, meticulously crafted to guide you through grammar, vocabulary, and cultural nuances. Supplement your learning with downloadable materials, including exercises and quizzes, to reinforce your understanding.Challenge yourself daily with coding problems in Java and C, earning tokens with each solved puzzle. Build streaks to keep yourself motivated and track your progress as you embark on your language and coding journey.
                            </div>
                            <div className='flex justify-center mt-10'>
                                <button onClick={() => {
                                    const email = localStorage.getItem('email');
                                    if (email) {
                                        navigate('/Dashboard')
                                    }
                                    else {
                                        navigate('/signup')
                                    }
                                }} className='bg-orange-500 w-48 h-10 rounded-full text-xl font-bold flex flex-row justify-center items-center text-blue-950'>
                                    Get Started
                                    <FaArrowRight className='ml-2 ' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection