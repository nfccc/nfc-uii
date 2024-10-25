import { useState } from 'react';

export default function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const appId = '63970'; // Replace with your actual app ID
    const redirectUri = encodeURIComponent('https://ktrade.vercel.app/');
    const authUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&redirect_uri=${redirectUri}`;
    
    window.location.href = authUrl; // Redirect to the OAuth2 authorization URL
  };

  return (
    <div>
      <h1>Deriv OAuth2 Authentication</h1>
      {!loggedIn ? (
        <button onClick={handleLogin}>Login with Deriv</button>
      ) : (
        <p>You are logged in!</p>
      )}
    </div>
  );
}

