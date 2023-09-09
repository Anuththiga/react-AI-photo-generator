import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [image, setImage] = useState('')

  const handleClick = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=API_KEY&order_by=random')
    .then(res=> {
      const photo = res.data.faces[0].urls[4][512];
      photo && setImage(photo);
    })
    .catch(err => {
      console.log(err.message);
    });
  }
  return (
    <div className="app">
      <h1>AI Photo Generator</h1>
      {image && <img src={image} alt='AI Image'/>}
      <button onClick={handleClick}>New Image</button>
    </div>
  );
}

export default App;
