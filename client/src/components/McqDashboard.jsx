import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link, useParams } from 'react-router-dom'

export const McqDashboard = () => {

    const [mcqData, setMcqData] = useState([]);
    const param = useParams;

    useEffect(() => {
        fetch('/mcq', { method: 'GET' }).then(res => { return res.json() }).then(res => setMcqData(res))
    }, [])

    const data = mcqData.map(item => {
        return <>
            <div className='flex flex-col justify-center items-center p-2 gap-2 bg-white rounded-xl'>
                <div><img src={item.logo} className='w-40 h-40' alt="" /></div>
                <Link to={"/mcqhome/" + item.title}><button className='font-bold py-1 px-3 rounded-full bg-black text-white'>{item.title}</button></Link>
            </div>
        </>
    })
    return (
        <div className='overflow-y-hidden flex flex-col h-screen' style={{ backgroundColor: '#B7C0EE' }}>
            <Header />
            <div className='flex flex-col gap-10 justify-center items-center m-5 '>
                <div className='font-serif font-bold text-5xl mt-3'>
                    Select the Category
                </div>
                <div className='grid grid-cols-4 gap-5 rounded-xl'>
                    {data}
                </div>
            </div>
        </div>
    )
}
