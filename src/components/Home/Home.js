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
        const selected = cart[Math.floor(Math.random() * cart.length)];

        setRandom(selected.name);
    }
    const removeCart = () => {
        setCart(cart.filter(item => item === 0));
        setRandom("")
    }


    return (
        <div>

            <div>
                <h1 className='text-5xl font-bold text-center my-4 text-blue-500'>Favorite Books Store</h1>
            </div>
            <div className='flex flex-row p-8 relative'>
                <div className='basis-3/4'>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            books.map(book => <Shop key={book.id} item={book} addedToCart={addedToCart} />)
                        }
                    </div>
                </div>
                <div style={{ height: "500px" }} className='basis-1/3 bg-slate-800 text-white sticky top-0'>
                    <h2 className='text-xl text-center mt-4'>Order Summary</h2>
                    {
                        cart.length === 0 ? "Empty Cart" : cart.map(item => <Cart key={item.id} name={item.name} />)
                    }
                    <div className='mt-9 text-center'>
                        <h2 className='text-xl'>Random Selected Book</h2><hr className='w-3/5 mx-auto' />
                        <p className='text-2xl'>{random}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <button onClick={() => chooseBooks()} className="my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-12">Choose 1 for me</button>
                        <button onClick={() => removeCart()} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-4">Choose Again</button>
                    </div>
                </div>
            </div>

            <div className='p-10'>
                <div>
                    <h1 className='text-xl'>Q:How React Works?</h1>
                    <p>A:React has his own DOM, same as browser has. Minimizing slower the app react use Virtual DOM(it's copy of real DOM). When state is change it's compare the both DOM and then where is changes it's execute.</p>
                </div>
                <div>
                    <h1 className='text-xl'>Q:Props VS State</h1>
                    <p>A:
                        State: 1.state is updatable 2. state change can be asynchronous 3. state can be modified using this.setState

                        props: 1.Props are read only 2.Props can not modified 3.Props are immutable
                    </p>
                </div>
                <div>
                    <h1 className='text-xl'>Q:How useState() work</h1>
                    <p>A:useState hook is a special JavaScript function. It declares a state which tracks under the hood for subsequent re-renders of the component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;