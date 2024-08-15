import React, { useEffect, useState } from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';

export const VideoDashboard = () => {
    const [videData, setVideoData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/video', { method: 'GET' }).then((res) => { return res.json() }).then((res) => { setVideoData(res) })
    }, [])

    const data = videData.map(item => {
        return <>
            <div className=' text-black flex flex-col justify-center items-center rounded-xl p-3' style={{ backgroundColor: "#435688" }}>
                <div className='rounded-md p-2' style={{ backgroundColor:"#8899C5"}}>
                    <img src={`${item.logo}`} alt="" className='h-48 w-48' />
                </div>
                <div className='text-2xl font-bold mt-3 mb-4 text-white'>
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
