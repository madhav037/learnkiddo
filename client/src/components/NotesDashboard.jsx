import React, { useEffect, useState } from 'react'
import python from '../notes/Python_Complete_Notes.pdf'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';

export const NotesDashboard = () => {

    const [notesData, setNotesData] = useState([]);
    const nav = useNavigate();

    useEffect(()=> {
        fetch("/notes", {method : 'GET'}).then((res) => {return res.json()}).then(res => {setNotesData(res)})
    }, [])

    const data = notesData.map(items => {
        return <>
            <div className=' text-black bg-white flex flex-col justify-center items-center rounded-xl p-3' >
                <div className='rounded-md p-3' >
                    <img src={`${items.logo}`} alt="" className='h-40 w-40'/>
                </div>
                <div className='text-2xl text-center w-40 font-bold mt-3 mb-4 text-black'>
                    {items.title}
                </div>
                <div>
                    <Link to={ '/enotesHome/' + items._id}><button className='bg-black text-white font-semibold text-sm px-3 py-1 rounded-2xl mb-3'>More</button></Link>
                </div>
            </div>
        </>
    })

  return (
    <>
    <div className='overflow-y-hidden flex flex-col' style={{backgroundColor: '#B7C0EE'}}>
        <Header />
        <div className='flex justify-center items-center m-5'>
            <div className='grid grid-cols-4 gap-5 rounded-xl'>
                {data}
            </div>
        </div>
    </div>
    </>
  )
}
