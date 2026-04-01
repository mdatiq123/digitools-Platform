import React from 'react';
import bannerImg from '../../assets/products/banner.png'; // আপনার ইমেজের পাথ
import badgeIcon from '../../assets/products/badge-icon.png'; // আপনার আইকন পাথ
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center justify-center px-6 py-12 lg:py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full mb-6">
                        <img src={badgeIcon} alt="badge" className="w-5 h-5" />
                        <span className="text-indigo-600 font-semibold text-sm md:text-base">
                            New: AI-Powered Tools Available
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight md:leading-[1.1] mb-6">
                        Supercharge Your <br className="hidden md:block" /> 
                        <span className="text-slate-800">Digital Workflow</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                        Access premium AI tools, design assets, templates, and productivity 
                        software—all in one place. Start creating faster today.
                        <br />
                        <span className="font-medium text-gray-400">Explore Products</span>
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        {/* Explore Button */}
                        <button className="w-full sm:w-52 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-lg hover:opacity-90 transition-all">
                            Explore Products
                        </button>

                        {/* Watch Demo Button (Gradient Border) */}
                        <button className="group relative w-full sm:w-52 h-14 p-[1.5px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                            <div className="flex items-center justify-center w-full h-full bg-white rounded-full group-hover:bg-transparent transition-all">
                                <span className="flex items-center gap-2 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white transition-colors">
                                    <Play size={20} className="fill-indigo-600 group-hover:fill-white text-indigo-600 group-hover:text-white" />
                                    Watch Demo
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none">
                    <div className="relative">
                        {/* গ্রাফিক্স বা শ্যাডো ইফেক্টের জন্য বাড়তি ডেকোরেশন যোগ করা যেতে পারে */}
                        <img
                            src={bannerImg}
                            alt="Banner"
                            className="w-full h-auto rounded-2xl shadow-2xl transform lg:hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;