import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const InnerNotes = () => {

    const [notes, setNotes] = useState({});
    const nav = useNavigate();
    const param = useParams();

    useEffect(()=> {
        fetch("/notes/" + param.id , {method : 'GET'}).then((res) => {return res.json()}).then(res => {setNotes(res)});
    }, [])
  return (
    <div className='h-screen w-full overflow-x-hidden'>
        <object data={notes.url} type="application/pdf" width="100%" height="100%">
        </object>
    </div>
  )
}
