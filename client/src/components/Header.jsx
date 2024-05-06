import React from 'react'
import pic from '../images/mainLogo.png'

const Header = () => {
  return (
      <div className='w-full h-16' style={{ backgroundColor: "#0B1D51" }}>
          <div className='h-full w-1/5  flex flex-row float-start'>
              <div className='p-1'>
                  <img src={pic} className='h-14' />
              </div>
              <div className=' text-white'>
                  <div className='text-2xl font-medium'>
                      Learn Kiddo
                  </div>
                  <div >
                      Easy to learn platform
                  </div>
              </div>
          </div>
          <div className='float-end mr-10 mt-4'>
              <button className='bg-orange-400 w-24 h-8 rounded-xl'>Log In</button>
          </div>
      </div>
  )
}

export default Header