import React from 'react';
import bannerImg from '../../assets/products/banner.png'
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="hero  min-h-screen mt-16">
            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="h-147.5 w-125 rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-7xl font-extrabold">Supercharge Your <br />Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products
                    </p>
                    <button className=" w-48 h-12  bg-linear-to-r from-blue-600  to-purple-600 text-white rounded-full mr-4 font-bold">Explore Products</button>
                    <button className="relative w-48 h-12 p-[1px] rounded-full bg-linear-to-r from-blue-600 to-purple-600 overflow-hidden">
                        <div className="flex items-center justify-center w-full h-full bg-white rounded-full transition-all hover:bg-transparent group">
                            <span className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent group-hover:text-white font-bold transition-colors leading-none">
                                <Play
                                    size={18}
                                    className="text-blue-500 group-hover:text-white transition-colors"
                                />
                                <span className="leading-none">Watch Demo</span>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;