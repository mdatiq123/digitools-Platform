import React from 'react';

const WorkFlow = () => {
    return (
        <section className='text-center py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600 px-4'>
            <div className='max-w-4xl mx-auto space-y-6'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight'>
                    Ready To Transform Your Workflow?
                </h1>
                <p className='text-base md:text-lg text-white opacity-90 max-w-2xl mx-auto leading-relaxed'>
                    Join thousands of professionals who are already using Digitools to work smarter. 
                    <br className="hidden md:block" /> Start your free trial today.
                </p>
                
                {/* Responsive Buttons */}
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 pt-4'>
                    <button className='w-full sm:w-auto bg-white rounded-full text-blue-600 py-4 px-8 text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg'>
                        Explore Products
                    </button>
                    <button className='w-full sm:w-auto border-2 border-white rounded-full text-white py-4 px-8 text-lg font-bold hover:bg-white hover:text-blue-600 transition-all'>
                        View Pricing
                    </button>
                </div> 

                <p className='text-sm md:text-base text-white opacity-80 pt-4'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </section>
    );
};

export default WorkFlow;