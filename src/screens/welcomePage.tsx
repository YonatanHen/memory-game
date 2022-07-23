import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { CHANGE_USERNAME } from '../store/userReducer'
import '../css/welcome.css'

export const WelcomePage = () => {
    const [name, nameHandler] = useState<string>('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        await dispatch({
            type: CHANGE_USERNAME,
            uname: name
        })

        navigate('/game')
    }

    return (
        <div className='welcomePageContainer'>
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="uname">User Name:</label>
                <input type="text" name="uname" onChange={(e) => nameHandler(e.target.value)} required/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}