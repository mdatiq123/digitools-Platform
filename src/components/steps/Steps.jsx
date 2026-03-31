import { Package, Rocket, User } from 'lucide-react';
import React from 'react';

const Steps = () => {
    return (
        <div className='bg-base-200 mt-34 p-34'>
            <div className='space-y-3 text-center'>
                <h2 className='font-extrabold text-5xl text-neutral'>Get Started in 3 Steps</h2>
                <p className='font-medium text-gray-500 text-2xl'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="cards grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 container mx-auto gap-4">
                <div className="cd shadow rounded-2xl  p-4 w-95 bg-white  ">
                    <div className='flex justify-end mb-7 '>
                        <div className='bg-linear-to-r from-blue-600  to-purple-600 p-3 rounded-full h-10 w-10 flex justify-center  items-center text-white'>01</div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='bg-linear-to-r from-blue-100  to-purple-100 p-3 rounded-full h-25 w-25 flex justify-center items-center text-white'>
                        <User 
                         className='w-15 h-15 text-blue-600'></User>
                    </div>
                    </div>
                    <div className='space-y-4 text-center mt-4 mb-24'>
                        <h2 className='font-bold text-2xl  '>Create Account</h2>
                        <p className=' text-gray-500 '>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>
                <div className="cd shadow rounded-2xl  p-4 w-95 bg-white  ">
                    <div className='flex justify-end mb-7 '>
                        <div className='bg-linear-to-r from-blue-600  to-purple-600 p-3 rounded-full h-10 w-10 flex justify-center  items-center text-white'>02</div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='bg-linear-to-r from-blue-100  to-purple-100 p-3 rounded-full h-25 w-25 flex justify-center items-center text-white'>
                        <Package 
                         className='w-15 h-15 text-blue-600'></Package>
                    </div>
                    </div>
                    <div className='space-y-4 text-center mt-4 mb-24'>
                        <h2 className='font-bold text-2xl  '>Choose Products</h2>
                        <p className=' text-gray-500 '>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                </div>
                <div className="cd shadow rounded-2xl  p-4 w-95 bg-white  ">
                    <div className='flex justify-end mb-7 '>
                        <div className='bg-linear-to-r from-blue-600  to-purple-600 p-3 rounded-full h-10 w-10 flex justify-center  items-center text-white'>03</div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='bg-linear-to-r from-blue-100  to-purple-100 p-3 rounded-full h-25 w-25 flex justify-center items-center text-white'>
                        <Rocket 
                         className='w-15 h-15 text-blue-600'></Rocket>
                    </div>
                    </div>
                    <div className='space-y-4 text-center mt-4 mb-24'>
                        <h2 className='font-bold text-2xl  '>Start Creating</h2>
                        <p className=' text-gray-500 '>Download and start using your premium <br /> tools immediately.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;