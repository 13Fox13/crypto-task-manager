import { useEffect, useState } from 'react';
import axios from 'axios';

const useCryptoData = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    axios.get('/api/crypto').then((res) => setCryptoData(res.data));
  }, []);

  return cryptoData;
};

export default useCryptoData;
