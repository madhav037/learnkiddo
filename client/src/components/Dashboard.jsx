import React from 'react'
import Header from './Header'
import bento from '../images/bentobg.png'
import bentobook from '../images/bentobooks.png'
import bentoarrow from '../images/bentoarrow.png'
import bentopaper from '../images/bentopaper.png'
import bentoperson from '../images/bentoperson.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const name = localStorage.getItem('email');
  const backgroundStyle = {
    background: `url(${bento}) no-repeat center center / cover fixed`
  };

  const divStyle = {
    backgroundColor: '#0c2461',
    borderRadius: '10px'
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col'>
        <Header />
        <div className='w-full h-full flex justify-center items-center' style={backgroundStyle}>
          <div className='w-4/5 h-4/5'>
            <div className='w-3/12 h-4/6 float-start p-2'>
              <div className='w-full h-full flex flex-col' style={divStyle}>
                <div className='h-1/2 w-full flex justify-start'>
                  <img src={bentobook} className='' />
                </div>
                <div className='w-full h-1/2 flex flex-col items-end'>
                  <div className='w-3/5 text-white text-xl pr-2 font-medium'>
                    Get exclusive e-notes of all languages..
                  </div>
                  <Link to="/enotesHome"><button className='bg-orange-500 w-20 rounded-xl mr-16 mt-2 text-xl font-medium'>Get</button></Link>
                </div>
              </div>
            </div>
            <div className='h-1/3 w-3/4 float-end p-2'>
              <div className='w-full h-full flex flex-row' style={divStyle}>
                <div className='w-3/4 h-full flex flex-col justify-center'>
                  <div className='text-white text-xl font-medium pl-5 pr-28'>
                    Provided each languages full coures playlist and one shot video..
                  </div>
                  <Link to='/videoHome'><button className='bg-orange-500 w-20 rounded-xl mr-16 mt-2 ml-5 text-xl font-medium'>Watch</button></Link>
                </div>
                <div className='w-1/4 h-full flex justify-center items-center pb-3'>
                  <img src={bentoarrow} />
                </div>
              </div>
            </div>
            <div className='h-1/3 w-2/4 float-start p-2'>
              <div className='w-full h-full flex flex-col justify-center items-center' style={divStyle}>
                <div className='flex text-indigo-300 font-bold text-xl justify-center pb-1'>
                  Welcome Back !!!
                </div>
                <div className='flex justify-center text-xl font-bold text-red-500 italic'>
                  {name}
                </div>
                <button className='w-24 rounded-2xl mt-2 text-xl text-blue-950 font-bold italic' style={{ backgroundColor: '#b7c0ee' }}>About</button>
              </div>
            </div>
            <div className='w-1/4 h-2/3  float-end p-2'>
              <div className='w-full h-full flex flex-col' style={divStyle}>
                <div className='w-full h-1/2 flex flex-col justify-center pl-5 mb-0'>
                  <div className='w-4/5 h-1/2 text-white text-xl font-medium'>
                    Solve 100+ Multiple Choice Question
                  </div>
                  <Link to='/mcqhome'><button className='bg-orange-500 w-20 rounded-xl mt-5 text-xl font-medium'>Solve</button></Link>
                </div>
                <div className='w-full h-1/2'>
                  <img src={bentopaper} className='h-full w-full' />
                </div>
              </div>
            </div>
            <div className='w-3/4 h-1/3 float-start p-2'>
              <div className='w-full h-full flex flex-row' style={divStyle}>
                <div className='w-2/5 h-full'>
                  <img src={bentoperson} className='h-full w-full' />
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center'>
                  <div className='text-white text-xl font-medium'>
                    Get rewarded with tokens for solving daily coding challenges in Java or C.
                  </div>
                  <Link to="/problemhome"><button className='bg-orange-500 w-20 rounded-xl mt-3 text-xl font-medium'>Earn</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard