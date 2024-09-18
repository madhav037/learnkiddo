import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useParams } from 'react-router-dom';

export const InnerVideo = () => {

    const [videData, setVideoData] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch('/video/' + params.id, { method: 'GET' }).then((res) => { return res.json() }).then((res) => { setVideoData(res) })
    }, [])

    return (
        <div className='flex flex-col h-screen' style={{ backgroundColor: '#B7C0EE' }}>
            <Header />
            <div className='flex flex-col justify-center items-center m-10 ' >
                <div className='w-11/12 h-auto flex flex-col gap-10'>
                    <div className='text-base font-semibold text-justify text-white p-8 rounded-2xl' style={{ backgroundColor: '#0B1D51' }}>
                        {videData.description}
                    </div>
                    <div className='flex flex-row gap-10'>
                        <iframe width="560" height="250" src={videData.oneShotVideoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                        <iframe width="560" height="250" src={videData.playlistUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
