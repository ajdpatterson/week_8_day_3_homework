import React, {useState, useEffect} from 'react';
// import blueDuckImg from "../images/blueduck.jpg"
// import redDuckImg from "../images/redduck.jpg"
// import greenDuckImg from "../images/greenduck.jpg"
// import pinkDuckImg from "../images/pinkduck.jpg"
import DuckList from '../components/DuckList';
import Duck

const ducklings = [
    {
        name: "Red Duck",
        // img: {redDuckImg},
        price: 10,
        colour: "red"
    },

    {
        name: "Blue Duck",
        // img: {blueDuckImg},
        price: 10,
        colour: "blue"
    },

    {
        name: "Green Duck",
        // img: {greenDuckImg},
        price: 15,
        colour: "green"
    },

    {
        name: "Pink Duck",
        // img: {pinkDuckImg},
        price: 20,
        colour: "pink"
    },
];

function DuckEmporium() {
    const [ducks, setDucks] = useState([])

    useEffect(()=>{ 
        setDucks(ducklings);
    }, [])
    

    return (
        <div>
            <DuckList ducks={ducks}/>
        </div>
    )
};

export default DuckEmporium;