import { ShoppingCartIcon } from '@heroicons/react/24/outline'

function CartBtn() {
  return (
    <button className='px-5 py-[6px] relative flex items-center justify-center hover:bg-pink-100 duration-300 rounded-[50%] h-10 w-10'>
      <ShoppingCartIcon className=' text-gray-700 size-6 absolute' />
      <span className="absolute flex h-3 w-3 top-1 right-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
      </span>
    </button>
  )
}

export default CartBtn