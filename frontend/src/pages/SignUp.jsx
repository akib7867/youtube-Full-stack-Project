import React from 'react'
import {useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {

  const primaryColor = "#ff4d2d"
  const hoverColor = "#e64323"
  const bgColor = "#fff9f6"
  const borderColor = "#ddd"

  // .....useState.....
  const [showPassword, setShowPassword] = useState(false)
  const { role, setRole } = useState("user")

  return (
    <div className='min-h-screen w-full flex items-center justify-center p-4' style={{ backgroundcolor: bgColor }} >
    
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

        <div >
          <label htmlFor="fullName" className='block text-gray-700 font-medium mb-1'>Full Name</label>
          <input type="text" className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='enter your Full Name' style={{ border:`1px solid ${borderColor}`}} />
        </div>


        {/* Email */}

        <div >
          <label htmlFor="Enter Your Email" className='block text-gray-700 font-medium mb-1'>Email</label>
          <input type="Email" className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='enter your Email' style={{ border: `1px solid ${borderColor}` }} />
        </div>

        {/* Mobile */}

        <div >
          <label htmlFor="Enter Your Mobile Number" className='block text-gray-700 font-medium mb-1'> Mobile Number</label>
          <input type="number" className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='Enter Your Mobile Number' style={{ border: `1px solid ${borderColor}` }} />
        </div>


        {/* Password */}

        <div>
          <label htmlFor="Password" className='block text-gray-700 font-medium mb-1'> Password </label>
          <div className='relaytive'>
            <input type={'${showPassword?"text":"password"} '} className='w-full border rounded-lag px-3 py-2 focus:outline-none ' placeholder='Password' style={{ border: `1px solid ${borderColor}` }} />
          </div>


          <button className='absolute right-3 curser-pointer top=[14px] text-gray-500'
            onClick={() => setShowPassword(prev = !prev)}>
            {!showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>


        {/* Role */}

        <div className='mab-4'>
          <label htmlFor="role" className='block text-gray-700 font-medium mb-1'> Role </label>
          <div className='flex gap-2'>

            {["user", "owner", "deliveryboy"].map((r) =>
              <button className='flex-1 border rounded-lg px-3 py-2 text-center font-medium transition-colors cursor-pointer'>
                {r}
              </button>
            )}
          </div>


        </div>

      </div>
    </div>
  )
}

export default SignUp
