// import { useState } from 'react'
import "./styles/reset.css";
import "./styles/App.css";
import { useEffect, useState } from "react";
import Game from "./components/Game";
import fetchGifData from "./gifFetcher";

function App() {
	const [gifData, setGifData] = useState(null);
  useEffect(() => {
    let fetch = async () => {
      let data = await fetchGifData()
      setGifData(data)
    }
    fetch()
	},[]);
	return (
		<>
			<h1>Cartoon Memory Game</h1>
			<Game gifData={gifData} />
		</>
	);
}

export default App;