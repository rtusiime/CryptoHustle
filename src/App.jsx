import { useEffect, useState, useMemo } from 'react';
import './App.css';
import CoinInfo from './components/CoinInfo';
import { fetchAllCoins } from './api'; // Assuming you've created an API utility file.

function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      setIsLoading(true);
      const coinsArray = await fetchAllCoins();
      setIsLoading(false);
      setCoinsList(coinsArray || []);
    };

    fetchAllCoinData();
  }, []);

  const filteredCoinData = useMemo(() => (
    searchInput
      ? coinsList.filter(coin => coin.FullName.toLowerCase().includes(searchInput.toLowerCase()))
      : coinsList
  ), [coinsList, searchInput]);

  return (
    <>
      <div className='whole-page'>
        <h1>CryptoHustle</h1>
        <input
          type='text'
          placeholder='Search for a coin'
          onChange={e => setSearchInput(e.target.value)} />
        <div>
          {isLoading ? <p>Loading...</p> : filteredCoinData.map((coin, index) => (
            <CoinInfo
              key={coin.Id || index}
              image={coin.ImageUrl}
              name={coin.FullName}
              symbol={coin.Symbol}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;