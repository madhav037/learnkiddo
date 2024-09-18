import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header';

export const ProblemDashboard = () => {
  const [problems, setProblems] = useState([]);
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const param = useParams();

 

  const getProblems = async () => {
    
    try {
      const data = await fetch('/problem/getallproblem')
      const res = await data.json();
      setProblems(res);

    } catch (error) {
      console.log(error);
    }
  }

  const getUser = async () => {
    const name = localStorage.getItem('email');
    try {
      const isSolved = await fetch("/user/" + name)
      const res = await isSolved.json();

      setUser(res);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProblems();
    getUser();
  }, [user])

  const totalSolvedQuestion = Array.isArray(user.solvedQuestion) ? user.solvedQuestion.length : 0;

  console.log(user);

  const probelmStatement = problems.map((e) => {
    return (
      <>
        <div className='flex w-screen'>
        <Link to={"/problemhome/" + e.problem_id} >
              <div className='text-xl w-screen px-3 flex justify-between font-semibold shadow-blue-950 shadow-md hover:bg-blue-950 hover:text-white py-3 rounded-lg'>
                
                  <div>
                    {e.problem_title}
                  </div>
                  <div className='me-10'>
                    {
                      user.solvedQuestion.includes(e._id)
                      ?
                      <>
                        <input type="checkbox" className='text-reds-950 text-xl' style={{zoom:1.5}} checked disabled name="" id="" />
                      </>
                      :
                      <>
                        <input type="checkbox" className=' text-xl' style={{zoom:1.5}} disabled name="" id="" />
                      </>
                    }
                  </div>
              </div>
              
              </Link>
        </div>
      </>
    )
  })

  return (
    <div className='w-screen h-fit overflow-hidden flex flex-col gap-10' style={{backgroundColor: '#B7C0EE'}}>
      <Header />
      <div className='flex justify-between items-center mx-10 '>
        <div className="text-3xl font-bold text-center font-serif">
            Program List
        </div>
        <div className='flex flex-col justify-center items-center font-bold border-2 border-black rounded-full w-20 h-20 shadow-xl'>
          <div className='text-2xl'>
            {totalSolvedQuestion}
          </div>
          <div className='border-t-2 w-1/2 border-black'>
          </div>
          <div>
            {probelmStatement.length}
          </div>
        </div>
      </div>
      <div className='w-screen p-2'>
        {probelmStatement}
      </div>
    </div>
  )
}
