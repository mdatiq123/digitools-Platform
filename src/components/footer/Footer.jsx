import React from 'react';
import instagram from '../../assets/products/Instagram.png'
import facebook from '../../assets/products/Facebook.png'
import X from '../../assets/products/Twitter.png'

const Footer = () => {
    return (
        <footer className='bg-[#0B1120] text-white pt-24 pb-10'>
            <div className='max-w-7xl mx-auto px-6'>
                {/* Main Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16'>
                    
                    {/* Brand Section */}
                    <div className='lg:col-span-2 space-y-6'>
                        <h1 className='text-4xl font-bold tracking-tight'>DigiTools</h1>
                        <p className='text-gray-400 text-base leading-relaxed max-w-sm'>
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>Product</h3>
                        <ul className='space-y-3 text-gray-400 text-sm'>
                            <li className='hover:text-white cursor-pointer transition-colors'>Features</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Pricing</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Templates</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Integrations</li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>Company</h3>
                        <ul className='space-y-3 text-gray-400 text-sm'>
                            <li className='hover:text-white cursor-pointer transition-colors'>About</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Blog</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Careers</li>
                            <li className='hover:text-white cursor-pointer transition-colors'>Press</li>
                        </ul>
                    </div>

                    {/* Resources & Social */}
                    <div className='space-y-6'>
                        <div className='space-y-4'>
                            <h3 className='text-lg font-semibold'>Resources</h3>
                            <ul className='space-y-3 text-gray-400 text-sm'>
                                <li className='hover:text-white cursor-pointer transition-colors'>Documentation</li>
                                <li className='hover:text-white cursor-pointer transition-colors'>Help Center</li>
                                <li className='hover:text-white cursor-pointer transition-colors'>Community</li>
                                <li className='hover:text-white cursor-pointer transition-colors'>Contact</li>
                            </ul>
                        </div>
                        
                        <div className='space-y-4'>
                            <h3 className='text-lg font-semibold'>Social Links</h3>
                            <div className='flex gap-4'>
                                <a href="#" className='bg-white rounded-full p-2 hover:bg-gray-200 transition-all'>
                                    <img src={instagram} alt="Instagram" className='w-5 h-5 object-contain invert' />
                                </a>
                                <a href="#" className='bg-white rounded-full p-2 hover:bg-gray-200 transition-all'>
                                    <img src={facebook} alt="Facebook" className='w-5 h-5 object-contain invert' />
                                </a>
                                <a href="#" className='bg-white rounded-full p-2 hover:bg-gray-200 transition-all'>
                                    <img src={X} alt="X" className='w-5 h-5 object-contain invert' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gray-800 w-full mb-8"></div>

                
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-8'>
                        <span className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</span>
                        <span className='hover:text-white cursor-pointer transition-colors'>Terms of Service</span>
                        <span className='hover:text-white cursor-pointer transition-colors'>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;