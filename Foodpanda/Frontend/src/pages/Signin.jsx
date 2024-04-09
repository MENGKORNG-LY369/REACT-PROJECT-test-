import React from 'react'
import { Link } from 'react-router-dom'
// import { GoogleLogin } from 'react-google-login'
export default function Signin() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-40"
            src="./src/assets/images/logo/panda-logo2.png"
            alt="Your Company"
          />
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-5">
           {/* <GoogleLogin
              className="w-full flex justify-center text-center shadow-none outline-none"
              clientId={'703863152740-0j4m2p2ho1rcutcelsm1390495k0gq7m.apps.googleusercontent.com'}
              onSuccess={(CredentialResponse) => {
                console.log(CredentialResponse);
              }}
              onError={() => console.error('Something went wrong')}
            /> */}
          </div>
        </div>
      </div>
    </>
  )
}



// import React from 'react'
// import { Link } from 'react-router-dom'
// import { GoogleLogin } from 'react-google-login'

// function Signin() {
//   const onSubmit = (event) => {
//     console.log("email, pass");
//     event.preventDefault();
//   }

//   return (
//     <>
//       <div className='flex justify-center items-center h-screen'>
//         <form onSubmit={onSubmit} className='w-4/12'>
//           <div className="flex flex-col">
//             <h4 className='text-2xl text-pink-500 font-medium'>Foodpanda</h4>
//             <h1 className='mt-3 text-3xl'>Sign in</h1>
//             <p className='text-gray-600'>Welcome to Foodpanda</p>
//           </div>
//           <div className="flex flex-col mt-5">
//             <label htmlFor="email" className='cursor-pointer'>Email</label>
//             <input className='outline-blue-300 border-2 border-slate-300 px-2 py-1 rounded-md' name='email' type="email" id="email" />
//           </div>
//           <div className="flex flex-col mt-2">
//             <label htmlFor="password" className='cursor-pointer'>Password</label>
//             <input className='outline-blue-300 border-2 border-slate-300 px-2 py-1 rounded-md' name='password' type="password" id="password" />
//           </div>
//           <div className="flex justify-end">
//               <Link to='/verify'>
//                 <span className=' text-blue-800'>
//                   Forgot Password?
//                 </span>
//               </Link>
//           </div>
//           <div className="mt-4">
//             <button className='w-full bg-blue-500 p-2 rounded-md text-white'>Sign In</button>
//           </div>
//           <div className="mt-5">
//             <GoogleLogin
//               className="w-full flex justify-center text-center shadow-none outline-none"
//               clientId={'703863152740-0j4m2p2ho1rcutcelsm1390495k0gq7m.apps.googleusercontent.com'}
//               onSuccess={(CredentialResponse) => {
//                 console.log(CredentialResponse);
//               }}
//               onError={() => console.log('Something went wrong')}
//             />
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default Signin