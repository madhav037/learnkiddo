import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header';

export const ProblemDashboard = () => {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getProblems();
  }, [])

  const getProblems = async () => {
    try {
      const data = await fetch('http://localhost:8000/problem/getallproblem')
      const res = await data.json();
      setProblems(res);

    } catch (error) {
      console.log(error);
    }
  }

  const probelmStatement = problems.map((e) => {
    return (
      <>
        <div className='w-screen p-1'>
              <div className='text-xl font-semibold shadow-blue-950 shadow-md hover:bg-blue-950 hover:text-white py-2 ps-2  rounded-lg'>
                <Link to={"/problemhome/" + e.problem_id}>
                  {e.problem_title}
                </Link>
              </div>
        </div>
      </>
    )
  })

  return (
    <div className='w-screen h-fit overflow-hidden flex flex-col gap-10' style={{backgroundColor: '#B7C0EE'}}>
      <Header />
      <div className="text-3xl font-bold text-center font-serif">
          Program List
      </div>
      <div>
        {probelmStatement}
      </div>
    </div>
  )
}
