import React, { use } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
// import Products from '../products/products';


const DigitalTools = ({productCardPromise}) => {
    const productCard = use(productCardPromise)
    console.log(productCard);
    
    return (
        <div className='max-w-7xl mx-auto mt-30 text-center '>
            <div className='space-y-4 mb-4'>
                <h1 className='font-extrabold text-5xl text-neutral'>Premium Digital Tools...</h1>
            <p className='text-gray-500 text-2xl '>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity..</p>
            </div>
            <div>
                <button className='btn '>Products</button>
                <button className='btn '>Cart</button>
            </div>
            <div>
               <ProductsCard productCard={productCard}></ProductsCard>
            </div>
        </div>
    );
};

export default DigitalTools;