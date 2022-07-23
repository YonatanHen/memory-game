import React from 'react'
import { GamePage } from './gamePage'
import { Scores } from './scores'
import '../css/game.css'

const MainGamePage = () => {
	return (
		<>
			<Scores />
			<GamePage />
		</>
	)
}

export default MainGamePage
