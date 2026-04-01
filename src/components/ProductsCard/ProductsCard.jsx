import React from 'react';
// import cardImg from '../../assets/products/writing_2327400 1.png'
const ProductsCard = ({ productCard }) => {
    console.log(productCard);

    const getTagColor = (tag) => {
        switch (tag) {
            case 'new':
                return 'badge-primary';
            case 'popular':
                return 'badge-success';
            case 'best seller':
                return 'badge-error';
            case 'Trending':
                return 'badge-info';
            default:
                return 'badge-warning';
        }
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center'>
            {
                productCard.map(product => {
                    return <div key={product.id} className="card w-96 bg-base-100 shadow space-y-4 h-full">
                        <div className="card-body">
                            <div className='flex justify-end'>
                                <span className={`badge badge-soft badge-xs ${getTagColor(product.tagType)}`}>
                                    {product.tagType}
                                </span>
                            </div>
                            <div className='border rounded-full p-2 w-16 h-16 flex justify-center items-center border-gray-200 bg-white text-4xl shadow-sm'>
                                <span>{product.icon}</span>
                            </div>
                            <div className="flex justify-center items-start flex-col">
                                <h2 className="text-3xl font-bold">{product.name}</h2>
                                <p className='text-start opacity-80'>{product.description}</p>
                            </div>
                            <div className="text-xl text-start opacity-80"><span className='font-bold text-3xl'>${product.price}/</span>{product.period}</div>
                            <ul className="mt-6 flex flex-col gap-3 text-sm text-start grow">
                                {
                                    product.features && product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-linear-to-r from-blue-600  to-purple-600 btn-block rounded-full p-3 text-white">Buy Now</button>
                            </div>
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default ProductsCard;