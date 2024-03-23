import { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Coin() {
    const [coin, setCoin] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${id.toLocaleLowerCase()}`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Datos no encontrados');
                }
                return response.json();
            })
            .then(data => {
                const coinParams = [{
                    id: data.data.id,
                    name: data.data.name,
                    rank: data.data.rank,
                    symbol: data.data.symbol,
                    priceUsd: data.data.priceUsd
                    
                }];
                setCoin(coinParams)
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const addFavorites = (element) => {
        const listFavorites = JSON.parse(localStorage.getItem('coinsFavorites')) || [];
        const newFavorites = [...listFavorites, element];
        localStorage.setItem('coinsFavorites', JSON.stringify(newFavorites));
    }

    return (
        <Fragment>
            <Link to='/'>Home</Link>
            {coin.map((data) => (
                <div key={data.id}>
                    <h1>{data.name}</h1>
                    <p>Rank: {data.rank}</p>
                    <p>Symbol: {data.symbol}</p>
                    <p>Price: {data.priceUsd}</p>
                    <button type="button" onClick={() => addFavorites(data)}>Añadir a favoritos</button>
                </div>
            ))}
        </Fragment>
    )

}

export default Coin