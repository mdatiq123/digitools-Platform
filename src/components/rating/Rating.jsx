import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-blue-600 to-purple-600 py-12 md:py-16'>
            <div className='flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-6 gap-10 lg:gap-0'>
                
                
                <div className="w-full lg:w-auto">
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center'>50K+</h1>
                    <p className='text-center text-white text-lg md:text-xl lg:text-2xl opacity-80 mt-2'>
                        Active Users
                    </p>
                </div>

                
                <div className="hidden lg:block h-24 w-px bg-white opacity-20"></div>
                
                <div className="block lg:hidden w-1/2 h-px bg-white opacity-20"></div>

                
                <div className="w-full lg:w-auto">
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center'>200+</h1>
                    <p className='text-center text-white text-lg md:text-xl lg:text-2xl opacity-80 mt-2'>
                        Premium Tools
                    </p>
                </div>

                
                <div className="hidden lg:block h-24 w-px bg-white opacity-20"></div>
                
                <div className="block lg:hidden w-1/2 h-px bg-white opacity-20"></div>

                
                <div className="w-full lg:w-auto">
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center'>4.9</h1>
                    <p className='text-center text-white text-lg md:text-xl lg:text-2xl opacity-80 mt-2'>
                        Rating
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Rating;