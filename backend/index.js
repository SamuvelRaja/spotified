require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const cors=require('cors')

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({
  origin: 'https://vibe.samjs.me', // Change this to your client's origin
  credentials: true // Allow credentials (cookies)
}))
app.use(cookieParser());

app.get('/test', (req, res) => {
    res.status(200).send('Server is working');
});
app.get('/', (req, res) => {
    res.status(200).send('Server running');
});

app.post('/token', async (req, res) => {
  // Convert the cookie object to a regular JavaScript object
    
  if(req.cookies['acctk']==undefined){
    
    const { secret } = req.body;
    if (secret !== process.env.SECRET_KEY) {
    return res.status(403).json({ error: 'Forbidden' });
    }

  try {
    const authResponse = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
      },
      data: 'grant_type=client_credentials'
    });

    const accessToken = authResponse.data.access_token;
    
    // Set the access token as a cookie
    res.cookie('acctk', accessToken, {
      httpOnly: true,
      secure: true, // Always secure in production
      sameSite: 'strict', // Add SameSite for extra protection
      maxAge: 3600000 
    });

    res.status(200).json({ tkn: accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  }else{
  res.status(201).json({ tkn: req.cookies['acctk'] })
  }
});

app.listen(port, () => {
  console.log(`BE Server running at http://localhost:${port}`);
});
