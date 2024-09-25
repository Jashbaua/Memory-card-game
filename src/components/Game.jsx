/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";
import '../styles/Game.css'

export default function Game({ gifData }) {
	const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [selectedIds, setSelectedIds] = useState([]);
	const idArray = initializeRandomArray(12)
	
	function handleClick(e) {
		let id=e.target.closest('div').id
		if (selectedIds.includes(id)) {
			if(score>bestScore)setBestScore(score)
			setScore(0)
			setSelectedIds([])
		}
		else {
			setScore(score+1)
			setSelectedIds([...selectedIds, id])
		}
	}

	return (
		<>
			<div className="score">
				<p>
					Get points by clicking on an image but don&apos;t click on any more
					than once!
				</p>
				<div>
					<p>Score:{score}</p>
					<p>Best Score:{bestScore}</p>
				</div>
            </div>
			{gifData?<div className="grid">
				{idArray.map(cardId => {
					return <Card id={cardId} gifUrl={gifData[cardId].url} onClick={handleClick} key={cardId} />
				})}
			</div>:<div></div>}
		</>
	);
}

function initializeRandomArray(length) {
    const arr = []
    for (let i = 0; i < length; i++){
        arr.push(i);
    }
	shuffle(arr)
	return arr
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}