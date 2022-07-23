import React from 'react'
import { useSelector } from 'react-redux'
import { IuserState } from '../store/userReducer'

export const Scores = () => {
	const scores = useSelector((state: IuserState) => state.scores)

	return (
		<div className='split scores-container'>
			<h1 style={{ color: 'gold', marginLeft: '5px' }}>Previous Scores:</h1>
			<ul>
				{scores.map((score: any, i: number) => {
					console.log(score)
					return (
						<li id={i.toString()}>
							{`${score.score} - ${new Date(score.date).toLocaleTimeString()}`}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
