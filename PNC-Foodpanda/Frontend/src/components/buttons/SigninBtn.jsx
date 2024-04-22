import React from 'react'

function SigninBtn() {
  return (
    <button className='flex gap-1 px-5 py-[6px] rounded-sm transition-all hover:text-pink-800'>
        <span>Sign in</span>
        <span aria-hidden="true">&rarr;</span>
    </button>
    )
}

export default SigninBtn