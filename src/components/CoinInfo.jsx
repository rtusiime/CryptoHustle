import { react, useEffect, useState } from 'react';
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {
    console.log()
    const [price, setPrice] = useState(null);

    useEffect (() => {
        const fetchCoinPrice = async () => {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`
            );
            const data = await response.json();
            setPrice(data.USD);
        };

        fetchCoinPrice().catch(console.error);
    }, [symbol]);

    return (
        <div className='coin-info'>
            {price ? (
                <li className='main-list' key={symbol}>
                    <img
                        className='icons'
                        src={`https://www.cryptocompare.com${image}`}
                        alt={`Small icon for ${name} crypto coin`} />
                    {name} <span className='tab'></span>
                   <h3>${price} USD </h3> 
                </li>

            ) : null
            }
        </div>
    );

}
export default CoinInfo;