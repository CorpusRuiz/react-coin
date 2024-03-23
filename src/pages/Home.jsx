import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    const [ coins, setCoins ] = useState([]);

    useEffect(() => {
        fetch('https://api.coincap.io/v2/assets/')
            .then(response => {
                if(!response.ok){
                    throw new Error('Datos no encontrados');
                }
                return response.json();
            })
            .then(data => {
                const coinsName = data.data.map(coin => ({
                    id: coin.id,
                    name: coin.name
                }));
                setCoins(coinsName);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <Fragment>
            <h1>Home</h1>
            <Link to='/favoritos'>Monedas favoritas</Link>
            <ul>
            {coins.map((coin) => (
                <li key={coin.id}>
                    <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
                </li>
            ))}
            </ul>
            
        </Fragment>
    );
    
}

export default Home;