import React from 'react'

function test() {
    return (
        <div>
            {/* <h1 className="text-3xl text-center p-5 font-bold underline">
                Hello world!
            </h1> */}


            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-1/2 text-center">
                    <h1 className="text-2xl font-bold mb-6">Welcome to TaskList Pro</h1>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-5">
                            Enter your email address to get started
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@yourcompany.com"
                            className="w-2/3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-2/3 mb-1">
                        Continue with Email
                    </button>
                    <p className='my-2  font-semibold text-gray-600'>OR</p>
                    <div className="flex-col  justify-center space-y-4">
                        <button className="w-2/3 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Continue with Google
                        </button>
                        <button className="w-2/3 bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded shadow">
                            Continue with Apple
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
                            Already have an account? Sign In
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default test