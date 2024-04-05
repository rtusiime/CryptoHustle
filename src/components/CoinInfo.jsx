import React, { useEffect, useState } from 'react';
import './CoinInfo.css';
import { fetchCoinPrice } from '../api'; // Implement this function in an API utility file.

const CoinInfo = React.memo(({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            const price = await fetchCoinPrice(symbol);
            setPrice(price);
        };

        fetchPrice();
    }, [symbol]);

    if (!price) {
        return null;
    }

    return (
        <div className='coin-info'>
            <div className='main-list' key={symbol}>
                <img
                    className='icons'
                    src={`https://www.cryptocompare.com${image}`}
                    alt={`Icon for ${name}`} />
                <h3>{name}</h3>
                <h3>${price} USD </h3>
            </div>
        </div>
    );
});

export default CoinInfo;