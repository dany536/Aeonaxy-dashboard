import React from 'react'

function hero() {
    return (
        <div className='bg-gray-100'>
            <div className="text-center lg:p-16 p-10 lg:pt-20">
                <h2 className="md:text-2xl text-xl font-bold mb-4">Start building your organization</h2>
                <p className="text-gray-600 mb-6 md:text-base text-md">
                    Invite users to unlock unique team scheduling features starting as low as $12 per user/mo.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white md:px-5 px-2.5 rounded-full md:py-2 py-1 text-md ">
                    <span className='text-sm md:text-md'>Invite Users</span>
                </button>
            </div>

            <div className="max-w-5xl mx-auto">
                <hr className='border-1' />
                <div className="md:mt-8 mt-2 p-4">
                    <h2 className="text-xl font-bold mb-4">What can I do as a team?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 inline-flex gap-2">
                            <div>
                                <img src="./image1.jpg" className='h-max w-full' alt="First Image" srcset="" />
                            </div>
                            <div>
                                <h3 className="md:text-lg text-md font-bold mb-2">Round Robin Scheduling</h3>
                                <p className="text-gray-600 mb-4 md:text-base text-sm">
                                    Automatically assign meetings based on what makes the most sense for your team's goals — whether by availability, priority or equity.
                                </p>
                                <button className="text-blue-500 hover:text-blue-600 text-sm md:text-base">Watch Video</button>
                            </div>

                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 inline-flex gap-2">
                            <div>
                                <img src="./image2.jpg" className='h-max w-80' alt="First Image" srcset="" />
                            </div>
                            <div>
                                <h3 className="md:text-lg text-md font-bold mb-2">Access Powerful Management Tools</h3>
                                <p className="text-gray-600 mb-4 md:text-base text-sm">
                                    Get new and existing users up to speed and engaged with event type templates to make sure everyone's set up for efficient scheduling, all managed through one centralized billing solution.
                                </p>
                                <button className="text-blue-500 hover:text-blue-600 text-sm md:text-base">Watch Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded">
                    Getting started
                </button>
            </div>

        </div>
    )
}

export default hero