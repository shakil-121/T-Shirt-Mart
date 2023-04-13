import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShart from '../TShart/TShart';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const tsharts = useLoaderData();
    const [cart, setCart] = useState([])


    const handlecartToSummary = tshart => {
        const exists = cart.find(ts => ts._id === tshart._id)
        if (exists) {
            toast('Already Exist')
           
        }
        else {
            const newCart = [...cart, tshart];
            setCart(newCart); 
            toast('Product Add Successfully')
        }
    }



    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(ts => ts._id !== id);
        setCart(remainingCart);
        toast("Item is remove from the Cart");
    }


    return (
        <div className='home-container'>
            <div className='t-shart-container'>
                {
                    tsharts.map(tshart => <TShart
                        key={tshart._id}
                        tshart={tshart}
                        handlecartToSummary={handlecartToSummary}
                    ></TShart>)
                }
            </div>
            <div>
                <Cart
                    key={cart._id}
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                >
                </Cart>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Home;