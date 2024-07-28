// utils.js
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchAccessToken = async () => {
  const secretKey = import.meta.env.VITE_SECRET_KEY;
  const fetchurl= import.meta.env.VITE_MODE=='DEV'?import.meta.env.VITE_DEV_BE:import.meta.env.VITE_PROD_BE

  try {
    const response = await axios.post(fetchurl, {
      secret: secretKey
    }, {
      withCredentials: true // Include credentials (cookies)
    });
    
    if(response.status==200){
      localStorage.setItem("acctk",response.data.tkn)
      window.location.reload()
    }else if(response.status==201){
      localStorage.setItem("acctk",response.data.tkn)
      window.location.reload()
    }

  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};

