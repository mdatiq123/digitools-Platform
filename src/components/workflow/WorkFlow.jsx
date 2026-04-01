import React from 'react';

const WorkFlow = () => {
    return (
        <div className='text-center  py-30 bg-linear-to-r from-blue-600  to-purple-600 space-y-6 '>
            <h1 className='text-[40px] text-white font-extrabold '>Ready to Transform Your Workflow?</h1>
            <p className='text-[16px] text-white opacity-90'>Join thousands of professionals who are already using Digitools to work smarter <br />.Start your free trial today.</p>
            <div className='space-x-3'>
                <button className='btn bg-white rounded-full text-blue-600  py-3 px-4 text-[16px] font-semibold '>Explore Products</button>
                <button className='btn btn-outline rounded-full border-white text-white text-[16px] font-semibold'>View Pricing</button>
            </div> 
            <p className='text-[16px] text-white opacity-90'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkFlow;