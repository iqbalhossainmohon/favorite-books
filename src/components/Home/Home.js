import React, { useEffect, useState } from 'react';
import Shop from '../shop/Shop';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center my-4 text-blue-500'>Favorite Books Store</h1>
            </div>
            <div className='flex flex-row p-8'>
                <div className='basis basis-10/12'>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            books.map(book => <Shop key={book.id} item={book} />)
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Home;