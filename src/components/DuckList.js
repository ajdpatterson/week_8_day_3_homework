import React from 'react';
import DuckDetails from './DuckDetails';

const DuckList = ({ducks}) => {
    const AllDucks = ducks.map((duck, index) => {
        return (<DuckDetails key={index} duck={duck} />);

    })

return (
    <ul>
        {AllDucks}
    </ul>
);
}

export default DuckList;