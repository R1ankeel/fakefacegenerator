import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const url = 'https://api.generated.photos/api/v1/faces?api_key=';
    const key = 'FlP2lwctf2UCWpVA6vTlqQ';
    const [image, setImage] = useState('');

    useEffect(() => {
        axios.get(url + key)
            .then(res => {
                console.log(res.data.faces)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

  return (
    <div className="App">
     <h1>Yo maaan</h1>
    </div>
  );
}

export default App;
