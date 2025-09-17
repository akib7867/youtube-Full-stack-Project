import React from 'react'

const SignUp = () => {

  const primaryColore = "#ff4d2d"
  const hoverColore = "#e64323"
  const bgColore = "#fff9f6"
  const borderColore = "#ddd"

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4'>
      {{ bagroundColore: bgColore }}
      <div className='bg-white rounded-x1 shadow-lh w-full max-w-mp p-8 border-[1px]}
      style ={{
      border : 1px solid ${borderColore}
      }}'>
        <h1 className='text-3xl font-bold mb-2 }style={{primaryColore}}'>
          Food Map</h1>
        <p className='text-gray-600 mb-8'>
          create to your account to get started with delicious food deliveries
        </p>

        {/* {FullName} */}

        <dev className ='mab-4'>
          <label htmlFor= "fullName" className='block text-gray-700 font-medium mb-1'>Full Name</label>
          <input type="text" className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='enter your Full Name' style= {{ border: 1} }/>
        </dev>


         {/* Email */}

        <dev className ='mab-4'>
          <label htmlFor= "Enter Your Email" className='block text-gray-700 font-medium mb-1'>Email</label>
          <input type="Email" className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='enter your Email' style= {{ border: 1} }/>
        </dev>

         {/* Mobile */}

        <dev className ='mab-4'>
          <label htmlFor= "Enter Your Mobile Number" className='block text-gray-700 font-medium mb-1'> Mobile Number</label>
          <input type="number" className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='Enter Your Mobile Number' style= {{ border: 1} }/>
        </dev>

      
       {/* Password */}

        <dev className ='mab-4'>
          <label htmlFor= "Password" className='block text-gray-700 font-medium mb-1'> Password </label>
          <div className='relaytive'>

          </div>
          <input type="Password" className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='Password' style= {{ border: 1} }/>
        </dev>


      </div>
    </div>
  )
}

export default SignUp
