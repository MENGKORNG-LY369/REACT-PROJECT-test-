import { Link } from "react-router-dom"

export function SigninBtn() {
  return (
    <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">
        <button className='bg-pink-500 text-white py-2 px-5 rounded-sm text-center'> Sign in </button>
    </Link>
  )
}

export function StartBtn() {
    return (
        <button className="transition px-8 py-2 rounded-md text-white ease-in-out delay-150 bg-pink-700 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300 ...">
            Get Start
        </button>
    )
}