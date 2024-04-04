import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
function Signin() {
  const onSubmit = (event) => {
    console.log("email, pass");
    event.preventDefault();
  }

  const handleFailure = (result) => {
    alert(result)
  }
  const handleLogin = (googleData) => {
    console.log(googleData);
  }
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <form onSubmit={onSubmit} className='w-4/12'>
          <div className="flex flex-col">
            <h4 className='text-2xl text-pink-500 font-medium'>Foodpanda</h4>
            <h1 className='mt-3 text-3xl'>Sign in</h1>
            <p className='text-gray-600'>Welcome to Foodpanda</p>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="email" className='cursor-pointer'>Email</label>
            <input className='outline-blue-300 border-2 border-slate-300 px-2 py-1 rounded-md' name='email' type="email" id="email" />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password" className='cursor-pointer'>Password</label>
            <input className='outline-blue-300 border-2 border-slate-300 px-2 py-1 rounded-md' name='password' type="password" id="password" />
          </div>
          <div className="flex justify-end">
              <Link to='/verify'>
                <span className=' text-blue-800'>
                  Forgot Password?
                </span>
              </Link>
          </div>
          <div className="mt-4">
            <button className='w-full bg-blue-500 p-2 rounded-md text-white'>Sign In</button>
          </div>
          <GoogleLogin
            // clientId={REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="login with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
          >

          </GoogleLogin>
        </form>
      </div>
    </>
  )
}

export default Signin