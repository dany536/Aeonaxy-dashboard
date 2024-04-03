import React from 'react'

function hero() {
    return (
        <div className='bg-gray-100'>
            <div className='flex'>
                <div className="text-center lg:p-28 p-12 -mr-14  w-full">
                    <h2 className="md:text-2xl text-lg font-bold mb-4">Start building your organization</h2>
                    <p className="text-gray-600 mb-6 md:text-base text-sm">
                        Invite users to unlock unique team scheduling features starting as low as $12 per user/mo.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white md:px-5 px-2.5 rounded-full md:py-2 py-1 text-md ">
                        <span className='text-sm md:text-md'>Invite Users</span>
                    </button>
                </div>
                <div className="-rotate-90 text-md -mr-7 w-max my-auto cursor-pointer bg-white shadow-md p-3 py-1 rounded-t-md">
                    <p className='font-sans text-gray-600'>
                        Feedback
                    </p>
                </div>
            </div>


            <div className="max-w-5xl mx-auto">
                <hr className='border-2' />
                <div className="md:pb-20 mt-2 p-4">
                    <div className="pb-2 w-full inline-flex md:flex-row items-center justify-between">
                        <div className="">
                            <h2 className="md:text-xl text-lg font-bold mb-4">What can I do as a team?</h2>
                        </div>
                        <div className="md:-mr-24 relative inline-block">
                            <button className="shadow-lg bg-gray-600 hover:bg-gray-800 text-white md:text-sm text-xs md:px-4 px-2.5 md:py-2 py-1.5 rounded">
                                Getting started
                            </button>
                            <span className="absolute top-0 right-0 block h-4 w-4 text-[9px] -mr-2 -mt-2 text-white rounded-full bg-red-600 text-center">3</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:pe-9">
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

        </div>
    )
}

export default hero