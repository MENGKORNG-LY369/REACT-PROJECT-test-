import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
function HomeProfile() {
  return (
    <>
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ">
                <div className='flex overflow-hidden items-center justify-center w-9 h-9 rounded-[50%]'>
                    <img src="./src/assets/images/profile/mengkorng.jpg" alt="" />
                </div> 
                
            {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </Menu.Button>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
                <Menu.Item>
                {({ active }) => (
                    <Link to={'/profile'}
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Account settings
                    </Link>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    Support
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    href="#"
                    className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                    )}
                    >
                    License
                    </a>
                )}
                </Menu.Item>
                <form method="POST" action="#">
                <Menu.Item>
                    {({ active }) => (
                    <button
                        type="submit"
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                        )}
                    >
                        Sign out
                    </button>
                    )}
                </Menu.Item>
                </form>
            </div>
            </Menu.Items>
        </Transition>
        </Menu>
    </>
  )
}

export default HomeProfile