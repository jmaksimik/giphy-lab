import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Gif from './assets/components/Gif/Gif'
import Button from './assets/components/Button/Button'

function App() {
  const randomGif = 'https://api.giphy.com/v1/gifs/random?api_key=V5GNLMyjc8OShat1fVRSOtuN0sMY2brc'

  const [gifDetails, setGifDetails] = useState({});
  const [toggle, setToggle] = useState(false);

  function handleToggle(state) {
    setToggle(!toggle);
    setToggle(!toggle);
  }



  useEffect(() => {
    console.log('use effect firing');
    // let gifSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=V5GNLMyjc8OShat1fVRSOtuN0sMY2brc&q=${gifSearch}&limit=1`
    
    async function makeApiCall() {
      try {
        const responseJson = await fetch(randomGif);
        const data = await responseJson.json();
        setGifDetails(data.data.images.original);
      } catch(err) {
        console.log(err)
      }
    }
    
    makeApiCall();

  }, [toggle])

  return (
    <div className="App">
      <div>Git Roulette!</div>
      <Button handleToggle={handleToggle} />
      <br />
      <br />
      <Gif gifDetails={gifDetails} />
    </div>
  )
}

export default App
