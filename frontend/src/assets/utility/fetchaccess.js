// utils.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchAccessToken = async () => {
  const secretKey = import.meta.env.VITE_SECRET_KEY;

  try {
    const response = await axios.post('http://localhost:8000/token', {
      secret: secretKey
    }, {
      withCredentials: true // Include credentials (cookies)
    });
    
    if(response.status==200){
      localStorage.setItem("acctk",response.data.tkn)
      window.location.reload()
    }

  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};

