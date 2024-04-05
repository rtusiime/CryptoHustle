import React, { useEffect, useState } from 'react';
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
            <li className='main-list' key={symbol}>
                <img
                    className='icons'
                    src={`https://www.cryptocompare.com${image}`}
                    alt={`Icon for ${name}`} />
                {name} <span className='tab'></span>
                <h3>${price} USD </h3>
            </li>
        </div>
    );
});

export default CoinInfo;