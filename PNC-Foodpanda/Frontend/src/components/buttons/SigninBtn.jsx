import React from 'react'

function SigninBtn() {
  return (
    <button className='flex gap-1 px-5 py-[6px] rounded-sm  hover:bg-pink-200 transition-all'>
        <span>Sign in</span>
        <span aria-hidden="true">&rarr;</span>
    </button>
    )
}

export default SigninBtn