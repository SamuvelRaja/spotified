// utils.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchAccessToken = async () => {
  const secretKey = import.meta.env.VITE_SECRET_KEY;
    console.log(secretKey,"skey")
  try {
    const response = await axios.post('http://localhost:8000/token', {
      secret: secretKey
    });

    
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};