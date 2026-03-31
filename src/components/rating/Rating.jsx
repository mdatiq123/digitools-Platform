import React from 'react';

const Rating = () => {
    return (
        <div className=' bg-linear-to-r from-blue-600  to-purple-600'>
            <div className='flex  justify-between items-center max-w-7xl mx-auto  p-12'>
            <div><h1 className='text-7xl font-extrabold text-white'>50K+</h1><p className='text-center text-white text-2xl opacity-80 mt-2'>Active Users</p></div>
            <div className="divider divider-horizontal"></div>

            <div><h1 className='text-7xl font-extrabold text-white'>200+</h1><p className='text-center text-white text-2xl opacity-80 mt-2'>Premium Tools</p></div>
            <div className="divider divider-horizontal"></div>

            <div><h1 className='text-7xl font-extrabold text-white'>4.9</h1><p className='text-center text-white text-2xl opacity-80 mt-2'>Rating</p></div>
        </div>
        </div>
    );
};

export default Rating;