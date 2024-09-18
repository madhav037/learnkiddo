import React, { useEffect, useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';

export const VideoDashboard = () => {
    const [videData, setVideoData] = useState([]);

    useEffect(() => {
        fetch('/video', { method: 'GET' }).then((res) => { return res.json() }).then((res) => { setVideoData(res) })
    }, [])

    const data = videData.map(item => {
        return <>
            <div className=' text-black flex flex-col justify-center items-center rounded-xl p-3 bg-white'>
                <div className='rounded-md p-2'>
                    <img src={`${item.logo}`} alt="" className='h-40 w-40' />
                </div>
                <div className='text-2xl font-bold mt-3 mb-4 text-black'>
                    {item.title}
                </div>
                <div>
                    <Link to={'/videoHome/' + item._id}><button className='bg-black text-white font-semibold text-sm px-3 py-1 rounded-2xl mb-3'>More</button></Link>
                </div>
            </div>
        </>
    })

    return (
        <div className='overflow-y-hidden flex flex-col' style={{ backgroundColor: '#B7C0EE' }}>
            <Header />
            <div className='flex justify-center items-center m-5'>
                <div className='grid grid-cols-4 gap-5 rounded-xl'>
                    {data}
                </div>
            </div>
        </div>
    )
}
