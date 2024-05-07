import React from 'react'
import pic from '../images/mainLogo.png'

const Header = () => {
  return (
      <div className='w-full p-1' style={{ backgroundColor: "#0B1D51" }}>
          <div className='h-full w-1/5  flex flex-row float-start items-center'>
              <div className='p-1'>
                  <img src={pic} className='h-14' />
              </div>
              <div className=' text-white flex flex-col gap-0'>
                  <div className='text-2xl font-bold'>
                      Learn Kiddo
                  </div>
                  <div className='text-sm -mt-1'>
                      Easy to learn platform
                  </div>
              </div>
          </div>
          <div className='float-end mr-10 mt-4'>
              <button className='bg-orange-400 w-24 h-8 rounded-xl font-bold'>Log In</button>
          </div>
      </div>
  )
}

export default Header