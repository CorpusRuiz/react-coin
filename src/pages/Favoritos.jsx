import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom'

function Favoritos() {

    const [ coinsFavorites, setCoinsFavorites ] = useState([]);

    useEffect(() => {
        setCoinsFavorites(JSON.parse(localStorage.getItem('coinsFavorites')));
    }, []);
    console.log(coinsFavorites)
    return (
        <Fragment>
            <h1>Favorite Coins</h1>
            <Link to='/'>Home</Link>
            <ul>
            {coinsFavorites.map((coin) => {
                <li key={coin.id}>
                    <div>
                        <h1>{coin.name}</h1>
                        <p>{coin.rank}</p>
                        <p>{coin.symbol}</p>
                    </div>
                </li>
            })}
            </ul>
        </Fragment>
    )
}

export default Favoritos