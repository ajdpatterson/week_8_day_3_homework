import React from 'react';
import handleAddToBasket from './DuckBasket'

const DuckDetails = ({duck, addToBasket}) => {

    return (<li>
        <p>{duck.name}</p>
        <p>{duck.price}</p>
        <p>{duck.colour}</p>
        <button onClick={handleAddToBasket}>Add to Basket</button>
    </li>)
    }

export default DuckDetails;