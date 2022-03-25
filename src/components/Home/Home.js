import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Shop from '../shop/Shop';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);


    const addedToCart = (item) => {
        const exits = cart.find(book => book.id === item.id);
        if (exits) {
            alert("same book not allowed")
        } else {
            if (cart.length === 4) {
                alert("not allowed over 4 books")
            } else {
                let newCart = [...cart, item];
                setCart(newCart);
            }
        }


    }

    const chooseBooks = () => {
        const randomSelected = cart[Math.floor(Math.random() * cart.length)];
        setRandom(randomSelected);
    }


    return (
        <div>

            <div>
                <h1 className='text-5xl font-bold text-center my-4 text-blue-500'>Favorite Books Store</h1>
            </div>
            <div className='flex flex-row p-8 relative'>
                <div className='basis-10/12'>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            books.map(book => <Shop key={book.id} item={book} addedToCart={addedToCart} />)
                        }
                    </div>
                </div>
                <div style={{ height: "500px" }} className='basis-1/5 bg-slate-800 text-white sticky top-0'>
                    <h2 className='text-xl text-center mt-4'>Order Summary</h2>
                    {
                        cart.map(item => <Cart key={item.id} name={item.name} random={random} />)
                    }

                    <div className='flex flex-col justify-center items-center'>
                        <button onClick={() => chooseBooks()} className="my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Choose 1 for me</button>
                        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Choose Again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;