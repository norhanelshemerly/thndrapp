import axios from 'axios';
import { PolygonTicker } from '../types';

interface PolygonResponse {
  results: PolygonTicker[];
}

export async function fetchNasdaqStocks(): Promise<PolygonTicker[]> {
  try {
    const response = await axios.get<PolygonResponse>(
      'https://api.polygon.io/v3/reference/tickers?active=true&limit=100&apiKey=tcxillrtXZoo8yOi9KoieIWQQJn0Apt5'
    );
    return response.data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}


