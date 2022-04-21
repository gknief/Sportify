import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const CLIENT_ID = "8defe2c2d84640299260e08492c3d840";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
  
  
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    if(!token && hash) {
      const accessToken = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", accessToken);
      setToken(accessToken);
    } else {
      setToken(token);
    }
  }, []) 

  return (
    <div className="App">
      <header className="App-header">
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Authenticate with Spotify</a>
      </header>
    </div>
  );
}

export default App;


// "BQCA8HJCpb0Gar2deEESLzJbz8bFwctTrMuhENQBX-bXAIHcaWtkF8WTaTXp6pS3utWiuurDEbtFwwVrHu0PTnVUWPstg6v3d7aY_iL5ddCZRF9DPjdxT_nub0sFUo6ylCFXuYDbAKcEUkv7jHcxkVKzVxewy3KT3lE"