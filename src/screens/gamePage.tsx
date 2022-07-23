import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colors } from '../constants/colors'
import {
	ADD_TO_SCORE,
	INITIALIZE_SCORE,
	UPDATE_SCORES,
} from '../store/userReducer'
import random from '../utilities/randomNumber'
import { IuserState } from '../store/userReducer'

export const GamePage = () => {
	const user = useSelector((state: IuserState) => state)
	const [clicked, isClicked] = useState<boolean>(false)
	const [current, setCurrent] = useState<number[]>([])

	const bulbs = useRef<number[]>([])

	const dispatch = useDispatch()

	useEffect(() => {
		if (current.length == 0 && clicked) {
			dispatch({
				type: ADD_TO_SCORE,
			})

			if (bulbs.current.length == 6){
				alert('You Win!!!')

				dispatch ({
					type: UPDATE_SCORES
				})

				dispatch({
					type: INITIALIZE_SCORE
				})

				isClicked(false)
				setCurrent([])
				bulbs.current = []
			}
		} 
	}, [current])

	const handleGame = async (event: any) => {
		var number = random()
		while (bulbs.current.includes(number) && bulbs.current.length < 6) {
			number = random()
		}
		// be aware that useState is asynchronous so value is only availabe during next render
		if (bulbs.current.length != 6) bulbs.current = [...bulbs.current, number]

		if (clicked == false) isClicked(true)

		setCurrent([...bulbs.current])

		// sleep function
		const sleep = (ms: number | undefined) =>
			new Promise((resolve) => setTimeout(resolve, ms))

		// paint the bulbs in randomal order for 1 sec each
		for (let j = 0; j < bulbs.current.length; j++) {
			var bulb: HTMLElement | null = document.getElementById(
				bulbs.current[j].toString()
			)
			if (bulb && bulb.dataset.color) {
				bulb.style.backgroundColor = bulb.dataset.color
				await sleep(1000)
				bulb.style.backgroundColor = 'transparent'
			}
		}
	}

	const handleClick = async (index: number) => {
		var temp = [...current]

		if (current[0] == temp[0] && temp[0] == index) {
			temp.shift()
			setCurrent([...temp])
		} else {
			alert('You Lose!')

			dispatch ({
				type: UPDATE_SCORES
			})

			dispatch({
				type: INITIALIZE_SCORE
			})

			isClicked(false)
			setCurrent([])
			bulbs.current = []
			console.log(document.getElementsByTagName('td'))

		}
	}

	return (
		<div className='split game-container'>
			<h1 style={{ paddingLeft: 10} }>{`Username: ${user.uname} | Score: ${
				user.currentScore
			} | Highest Score: ${
				user.scores.length > 0
					? Math.max(
							...user.scores.map((score: any) => {
								return score.score
							})
					  )
					: 0
			}`}</h1>
			<div className='game'>
				<button
					onClick={handleGame}
					disabled={current.length == 0 ? false : true}
				>
					{!clicked ? 'Start!' : 'Next Level'}
				</button>
				<table>
					<tr>
						{colors.slice(0, 3).map((t: any, i: number) => {
							return (
								<td
									id={i.toString()}
									key={i}
									data-color={colors[i]}
									onClick={() => handleClick(i)}
									// style={{ background: 'white '}}
								></td>
							)
						})}
					</tr>
					<tr>
						{colors.slice(3, 6).map((t: any, i: number) => {
							return (
								<td
									id={(i + 3).toString()}
									key={i + 3}
									data-color={colors[i + 3]}
									onClick={() => handleClick(i + 3)}
									// style={{ background: 'white '}}
								></td>
							)
						})}
					</tr>
				</table>
			</div>
		</div>
	)
}
