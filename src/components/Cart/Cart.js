import React from 'react';

const Cart = ({ name, random }) => {



    return (
        <div className='p-5'>
            <p>{name}</p>
            <div>
                <p>{random}</p>
            </div>

        </div>
    );
};

export default Cart;