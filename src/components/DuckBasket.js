import React, {useEffect, useState} from 'react';

const DuckBasket = () => {
    const [userBasket, setUserBasket] = useState([]);

    const handleAddToBasket = (event) => {
        setUserBasket(event.target.value)
    }
}