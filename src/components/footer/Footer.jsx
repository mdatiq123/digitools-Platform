import React from 'react';
import instagram from '../../assets/products/Instagram.png'
import facebook from '../../assets/products/Facebook.png'
import X from '../../assets/products/Twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white '>
            <div className='pt-30 pb-12 flex flex-wrap  justify-center items-start gap-26 '>
                <div className='space-y-4'>
                    <h1 className='text-5xl font-bold'>DigiTools</h1>
                    <p className='opacity-80 text-[16px]'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className='space-y-4'>
                    <h3 className='text-xl'>Product</h3>
                    <p className='opacity-80 text-[16px]'>Features</p>
                    <p className='opacity-80 text-[16px]'>Pricing</p>
                    <p className='opacity-80 text-[16px]'>Templates</p>
                    <p className='opacity-80 text-[16px]'>Integrations</p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-xl'>Product</h3>
                    <p className='opacity-80 text-[16px]'>Features</p>
                    <p className='opacity-80 text-[16px]'>Pricing</p>
                    <p className='opacity-80 text-[16px]'>Templates</p>
                    <p className='opacity-80 text-[16px]'>Integrations</p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-xl'>Product</h3>
                    <p className='opacity-80 text-[16px]'>Features</p>
                    <p className='opacity-80 text-[16px]'>Pricing</p>
                    <p className='opacity-80 text-[16px]'>Templates</p>
                    <p className='opacity-80 text-[16px]'>Integrations</p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-xl'>Social Links</h3>
                    <div className='flex gap-2'>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={X} alt="" />
                    </div>
                </div>
            </div>
            <div className="divider bg-gray-500 max-w-6xl mx-auto h-px"></div>
            <div className='flex flex-wrap justify-between items-center max-w-6xl pb-12 mx-auto'>
                <p className='opacity-80 text-[16px]'>© 2026 Digitools. All rights reserved.</p>
                <div className='flex justify-center items-center gap-4'>
                    <p className='opacity-80 text-[16px]'>Privacy Policy</p>
                    <p className='opacity-80 text-[16px]'>Terms of Service</p>
                    <p className='opacity-80 text-[16px]'>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;