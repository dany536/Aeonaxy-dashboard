import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const menuItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'About',
        href: '#',
    },
    {
        name: 'Contact',
        href: '#',
    },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="relative shadow-md w-full bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <img src="./logo.jpg" className='w-12' alt="Logo" srcset="" />
                </div>
                <div className="hidden space-x-2 lg:block">
                    <ul className="ml-12 items-center inline-flex space-x-8">
                        <li>
                            <a href="" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                Availability
                            </a>
                        </li>
                        <li>
                            <a href="" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                Integrations
                            </a>
                        </li>
                        <li>
                            <a href="" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                Help
                                <span>
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                <p className=" text-center items-center bg-gray-300 mr-2 border-2 border-slate-500 hover:text-gray-800 h-8 w-8 p-1 rounded-full">
                                    J
                                </p>
                                Account
                                <span>
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <img src="./logo.jpg" className='w-12' alt="Logo" srcset="" />
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        <ul className="ml-12 items-center space-y-3">
                                            <li>
                                                <a href="" className=" items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className=" items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                                    Availability
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className=" items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                                    Integrations
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                                    Help
                                                    <span>
                                                        <ChevronDown className="ml-2 h-4 w-4" />
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                                                    Account
                                                    <span>
                                                        <ChevronDown className="ml-2 h-4 w-4" />
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>



                                        {/* {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                                <span>
                                                    <ChevronRight className="ml-3 h-4 w-4" />
                                                </span>
                                            </a>
                                        ))} */}
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
            <hr className='border-1' />

            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 lg:mt-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span className="font-semibold md:text-xl text-md">Admin Management</span>
                    <span className='md:text-sm text-xs text-gray-500'>1/1 seats occupied</span>
                </div>
                <div className="space-x-2">
                    <button className='border-2 items-center font-medium rounded-3xl md:px-3 px-1.5 md:pb-2 py-0.5 text-blue-500 border-blue-500 md:text-xs text-[10px]'>
                        <span className='md:text-xl '>+</span> New User
                    </button>
                </div>
            </div>

            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 pb-1 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-8">
                    <span className="font-medium text-sm pb-1 border-b-2 border-blue-500">All People</span>
                    <span className="font-medium text-sm pb-1">Groups</span>
                    <span className="font-medium text-sm ">Managed events <span className='text-[8px] tracking-widest p-[2px] px-2 rounded bg-blue-500 text-white'>BETA</span></span>
                </div>

            </div>
        </div>
    )
}
