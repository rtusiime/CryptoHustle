import APIresponse from './APIresponse.json';
const API_KEY = import.meta.env.VITE_APP_API_KEY;

/**
 * Fetches the entire coin list.
 */
export async function fetchAllCoins() {

    try {
        //   const response = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${API_KEY}`,{ signal: controller.signal });
        // if (!response.ok) {
        //   throw new Error("Network response was not ok.");
        // }
        // const data = await response.json();
        const data = APIresponse;
        console.log("response: ", data);
        // Filter only the coins on blockchain platform, if necessary
        const coinsArray = Object.values(data.Data).filter(coin => coin.PlatformType === "blockchain");
        return coinsArray;
    } catch (error) {
        console.error("Error fetching all coins:", error);
        return []; // Return an empty array in case of error to prevent app crash
    }
}

/**
 * Fetches the price of a specific coin by its symbol.
 */
export async function fetchCoinPrice(symbol, signal) {
    try {
        const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=${API_KEY}`, { signal });
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        return data.USD;
    } catch (error) {
        if (error.name === 'AbortError') {
            // Handle abort without logging an error, as it's an expected behavior
            console.log('Fetch aborted');
        } else {
            console.error(`Error fetching price for ${symbol}:`, error);
        }
        return null; // Return null in case of errors
    }
}