import { Package, Rocket, User } from 'lucide-react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Steps = () => {
    const stepsData = [
        {
            id: '01',
            title: 'Create Account',
            description: 'Sign up for free in seconds. No credit card required to get started.',
            icon: <User className='w-10 h-10 md:w-12 md:h-12 text-[#7C3AED]' />,
        },
        {
            id: '02',
            title: 'Choose Products',
            description: 'Browse our catalog and select the tools that fit your needs.',
            icon: <Package className='w-10 h-10 md:w-12 md:h-12 text-[#7C3AED]' />,
        },
        {
            id: '03',
            title: 'Start Creating',
            description: 'Download and start using your premium tools immediately.',
            icon: <Rocket className='w-10 h-10 md:w-12 md:h-12 text-[#7C3AED]' />,
        },
    ];

    return (
        <section className='bg-gray-50 py-20 px-4 md:px-8'>
            <ToastContainer />
            
            {/* Header Section */}
            <div className='max-w-4xl mx-auto text-center mb-16 space-y-4'>
                <h2 className='font-[900] text-3xl md:text-5xl text-slate-900'>
                    Get Started In 3 Steps
                </h2>
                <p className='text-gray-500 text-lg md:text-xl font-medium'>
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            {/* Steps Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {stepsData.map((step) => (
                    <div 
                        key={step.id} 
                        className="relative bg-white border border-gray-100 shadow-sm rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300"
                    >
                        {/* Step Number (Top Right) */}
                        <div className='absolute top-6 right-6 bg-[#7C3AED] text-white text-xs font-bold h-8 w-8 flex justify-center items-center rounded-full shadow-lg'>
                            {step.id}
                        </div>

                        {/* Icon Container */}
                        <div className='bg-[#F3EFFF] rounded-full h-24 w-24 md:h-28 md:w-28 flex justify-center items-center mb-8'>
                            {step.icon}
                        </div>

                        {/* Text Content */}
                        <div className='space-y-3'>
                            <h3 className='font-bold text-2xl text-slate-800'>
                                {step.title}
                            </h3>
                            <p className='text-gray-500 leading-relaxed max-w-[260px] mx-auto'>
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Steps;