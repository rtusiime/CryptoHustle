import { useEffect, useState } from 'react'
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import CoinInfo from './components/CoinInfo';



function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(list.Data[item])
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };



  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${API_KEY}`
      );
      const data = await response.json();
      setList(data);
      console.log(data);
    };

    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <>
      <div className='whole-page'>
        <h1>CryptoHustle</h1>
        <input
          type='text'
          placeholder='Search for a coin'
          onChange={(inputString) => searchItems(inputString.target.value)} />
        <ul>
          {searchInput.length > 0
            ? filteredResults.map((coin) =>
              list.Data[coin].PlatformType === "blockchain" ?
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
                : null
            )
            : list && Object.entries(list.Data).map(([coin]) =>
              list.Data[coin].PlatformType === "blockchain" ?
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
                : null
            )}
        </ul>
      </div>

    </>
  )
}

export default App;
