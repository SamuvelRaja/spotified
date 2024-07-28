# Spotified

Spotified is a full-stack application built with Node.js and React. The main purpose of the Node.js backend is to obtain a Spotify Web API access token. Here's how the app functions:

- The backend server, implemented in Node.js, is responsible for requesting an authentication token from the Spotify Web API.
- The frontend, built with React, uses React Toolkit for state management and React Query for data fetching.

## Backend

The backend is located in the `backend` folder. When a user loads the React app, the frontend sends a request to the backend with a secret key stored in the frontend environment. The backend verifies the secret key and sends an authorization request to Spotify with the client ID and token stored in the backend environment.

If the access token is received successfully, the backend sets a cookie and sends the response to the frontend. The frontend then stores the token in local storage for subsequent requests made from the frontend app. The Node.js backend uses cookies to verify that the token is valid every time the frontend app reloads.

## Frontend

The frontend is located in the `frontend` folder. It is built with React and interacts with the backend to obtain the Spotify access token. The frontend app sends a request to the backend with the secret key, and upon receiving the token, it stores it in local storage for future use.

## Getting Started

To get started with Spotified, follow these steps:

1. Clone the repository.
2. Navigate to the `backend` folder and install the dependencies by running `npm install`.
3. Set up the necessary environment variables in the `.env` file.
4. Start the backend server by running `npm start`.
5. Navigate to the `frontend` folder and install the dependencies by running `npm install`.
6. Set up the necessary environment variables in the `.env` file.
7. Start the frontend development server by running `npm start`.

## Contributing

Contributions are welcome! If you'd like to contribute to Spotified, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.



