import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='shadow-sm'>

            <div className="navbar max-w-7xl mx-auto bg-base-100  ">
                

                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li className='font-semibold text-neutral'><a href="">Products</a></li>
                            <li className='font-semibold text-neutral'><a href="">Features</a></li>
                            <li className='font-semibold text-neutral'><a href="">Pricing</a></li>
                            <li className='font-semibold text-neutral'><a href="">Testimonials</a></li>
                            <li className='font-semibold text-neutral'><a href="">FAQ</a></li>
                            </ul>
                        </div>
                        <h3 className='text-3xl bg-linear-to-r from-blue-600  to-purple-600 bg-clip-text text-transparent font-bold'>DigiTools</h3>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 ">
                            <li className='font-semibold text-neutral'><a href="">Products</a></li>
                            <li className='font-semibold text-neutral'><a href="">Features</a></li>
                            <li className='font-semibold text-neutral'><a href="">Pricing</a></li>
                            <li className='font-semibold text-neutral'><a href="">Testimonials</a></li>
                            <li className='font-semibold text-neutral'><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ShoppingCart></ShoppingCart>
                        <button className='btn btn-ghost rounded-full'>log In</button>
                        <button className='btn bg-linear-to-r from-blue-600  to-purple-600 text-white rounded-full font-semibold'>Get Started</button>
                    </div>
                </div>
            </div>
        

    );
};

export default Navbar;