import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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

  return (
    <>
      <div>ProblemDashboard</div>
      <div>
        {problems.map(pro => {
          return (
            <li onClick={() => navigate('/problemhome/' + pro.problem_id)}>
              {pro.problem_title}
            </li>)
        })}
      </div>
    </>
  )
}
