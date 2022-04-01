import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode
      (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word, size, bgColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="App">
      <h1>Générateur de code QR
      </h1>
      <div className="input-box">
        <div className="gen">
          <input type="text" onChange={
            (e) => { setTemp(e.target.value) }}
            placeholder="Saisir le texte à encoder" />
          <button className="button"
            onClick={handleClick}>
            Générer
          </button>
        </div>
        <div className="extra">
          <h5>Couleur arrière plan:</h5>
          <input type="color" onChange={(e) => { setBgColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="200" max="600"
            value={size} onChange={(e) => { setSize(e.target.value) }} />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="" />
        <a href={qrCode} download="QRCode">
          <button type="button">Télécharger</button>
        </a>
      </div>
    </div>
  );
}

export default App;
