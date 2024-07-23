require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const cors=require('cors')

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors())
app.use(cookieParser());


app.post('/token', async (req, res) => {
  const { secret } = req.body;
    console.log(req.body)
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
    console.log(accessToken)
    // Set the access token as a cookie
    res.cookie('acctk', accessToken, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000 // Cookie expiration time in milliseconds (e.g., 1 hour)
    });

    res.status(200).json({ message: 'sucess' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
