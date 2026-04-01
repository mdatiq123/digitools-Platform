import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductsCard = ({ productCard = [] }) => {
    const [view, setView] = useState('products');
    const [cart, setCart] = useState([]);

   
    const gradientStyle = {
        background: "linear-gradient(to right, #2563eb, #9333ea)",
        color: "white",
        fontWeight: "bold"
    };

    
    const handleAddToCart = (product) => {
        const isExist = cart.find(item => item.id === product.id);
        if (!isExist) {
            setCart([...cart, product]);
            toast.success(`${product.name} added to cart! 🛒`, {
                style: gradientStyle,
                position: "top-right"
            });
        }
    };

   
    const handleRemoveFromCart = (id, name) => {
        setCart(cart.filter(item => item.id !== id));
        toast.error(`${name} removed! 🗑️`, {
            style: { ...gradientStyle, background: "#ef4444" },
            position: "top-right"
        });
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    
    const handleCheckout = () => {
        toast.info(`Purchase Successful! Total: $${totalPrice.toFixed(2)}`, {
            style: gradientStyle,
            position: "top-center"
        });
        setCart([]);
        setView('products');
    };

    const getTagColor = (tag) => {
        switch (tag) {
            case 'new': return 'badge-primary';
            case 'popular': return 'badge-success';
            case 'best seller': return 'badge-error';
            case 'Trending': return 'badge-info';
            default: return 'badge-warning';
        }
    };

    return (
        <div className="p-4 md:p-10">
            
            <ToastContainer />

            
            <div className='bg-base-200 rounded-full w-fit mx-auto mb-10 p-1 flex gap-2'>
                <button 
                    onClick={() => setView('products')}
                    className={`btn rounded-full border-none px-8 ${view === "products" ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'btn-ghost'}`}
                >
                    Products
                </button>
                <button 
                    onClick={() => setView('cart')}
                    className={`btn rounded-full border-none px-8 ${view === "cart" ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'btn-ghost'}`}
                >
                    Cart ({cart.length})
                </button>
            </div>

            {view === 'products' ? (
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center'>
                    {productCard.map(product => {
                        const isInCart = cart.find(item => item.id === product.id);
                        return (
                            <div key={product.id} className="card w-full max-w-sm bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-100">
                                <div className="card-body p-6 flex flex-col">
                                    <div className='flex justify-end'>
                                        <span className={`badge badge-soft badge-xs font-bold ${getTagColor(product.tagType)}`}>
                                            {product.tagType}
                                        </span>
                                    </div>
                                    <div className='border rounded-full p-2 w-16 h-16 flex justify-center items-center border-gray-200 bg-white text-4xl shadow-sm'>
                                        <span>{product.icon}</span>
                                    </div>
                                    <div className="mt-4 flex flex-col grow">
                                        <h2 className="text-2xl font-bold">{product.name}</h2>
                                        <p className='text-start opacity-70 mt-2 text-sm'>{product.description}</p>
                                    </div>
                                    <div className="text-xl text-start opacity-90 mt-4">
                                        <span className='font-bold text-3xl'>${product.price}/</span>{product.period}
                                    </div>
                                    <ul className="mt-6 flex flex-col gap-3 text-sm text-start grow">
                                        {product.features && product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6">
                                        <button 
                                            onClick={() => handleAddToCart(product)}
                                            disabled={isInCart}
                                            className={`btn btn-block rounded-full p-3 text-white border-none transition-all ${isInCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-linear-to-r from-blue-600 to-purple-600 hover:brightness-110 active:scale-95'}`}
                                        >
                                            {isInCart ? 'Added to Cart ✅' : 'Buy Now'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                
                <div className="max-w-2xl mx-auto bg-base-100 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart 🛒</h2>
                    {cart.length > 0 ? (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <span className="text-3xl">{item.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-lg">{item.name}</h3>
                                            <p className="font-bold text-blue-600">${item.price}</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleRemoveFromCart(item.id, item.name)}
                                        className="btn btn-sm btn-error btn-outline rounded-lg"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <div className="mt-10 pt-6 border-t border-gray-300">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xl">Total Amount:</span>
                                    <span className="text-3xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                                </div>
                                <button 
                                    onClick={handleCheckout}
                                    className="btn bg-linear-to-r from-blue-600 to-purple-600 btn-block rounded-full text-white border-none text-lg shadow-md hover:scale-[1.01] transition-transform active:scale-95"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <p className="opacity-50 text-lg">Your cart is empty!</p>
                            <button onClick={() => setView('products')} className="btn btn-link text-blue-600">Back to Store</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductsCard;