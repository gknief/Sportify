import logo from './logo.svg';
import './App.css';

function App() {
  const CLIENT_ID = "8defe2c2d84640299260e08492c3d840";
  const REDIRECT_URL = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
