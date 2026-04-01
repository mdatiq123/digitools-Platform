import React from 'react';
import instagram from '../../assets/products/Instagram.png';
import facebook from '../../assets/products/Facebook.png';
import X from '../../assets/products/Twitter.png';

const Footer = () => {
    return (
        <footer className='bg-[#0B0F19] text-white pt-20 pb-10'>
            <div className='max-w-7xl mx-auto px-6'>
                
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16'>
                    
                    {/* Logo & Bio - Takes 2 columns on large screens */}
                    <div className='lg:col-span-2 space-y-6'>
                        <h1 className='text-4xl font-bold tracking-tight'>DigiTools</h1>
                        <p className='text-gray-400 text-lg leading-relaxed max-w-sm'>
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className='space-y-5'>
                        <h3 className='text-xl font-bold'>Product</h3>
                        <ul className='space-y-3 text-gray-400'>
                            <li className='hover:text-white cursor-pointer transition-colors'>Features</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Pricing</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Templates</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Integrations</li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className='space-y-5'>
                        <h3 className='text-xl font-bold'>Company</h3>
                        <ul className='space-y-3 text-gray-400'>
                            <li className='hover:text-white cursor-pointer transition-colors'>About</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Blog</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Careers</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Press</li>
                        </ul>
                    </div>

                    {/* Social Links Section */}
                    <div className='space-y-5'>
                        <h3 className='text-xl font-bold text-center md:text-left'>Social Links</h3>
                        <div className='flex gap-4 justify-center md:justify-start'>
                            <a href="#" className='hover:scale-110 transition-transform'>
                                <img src={instagram} alt="Instagram" className='w-10 h-10' />
                            </a>
                            <a href="#" className='hover:scale-110 transition-transform'>
                                <img src={facebook} alt="Facebook" className='w-10 h-10' />
                            </a>
                            <a href="#" className='hover:scale-110 transition-transform'>
                                <img src={X} alt="X" className='w-10 h-10' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-800 w-full mb-8"></div>

                {/* Bottom Bar */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    <p className='text-gray-500 text-sm'>
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <div className='flex flex-wrap justify-center gap-6 text-sm text-gray-500'>
                        <span className='hover:text-white cursor-pointer'>Privacy Policy</span>
                        <span className='hover:text-white cursor-pointer'>Terms of Service</span>
                        <span className='hover:text-white cursor-pointer'>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;