export const ADD_TO_SCORE = 'ADD_TO_SCORE'
export const INITIALIZE_SCORE = 'INITIALIZE_SCORE'
export const CHANGE_USERNAME = 'CHANGE_USERNAME'
export const UPDATE_SCORES = 'UPDATE_SCORES'

interface IAction {
    type: string,
    uname: string | null
}

export interface IuserState {
    uname: string,
    scores: Array<number>,
    currentScore: number
}

const initialState = {
    uname: '',
    scores: [],
    currentScore: 0
}

export const user = (state: IuserState = initialState, action: IAction) => {
    switch(action.type) {
        case ADD_TO_SCORE:
            return {
                ...state,
                currentScore: state.currentScore + 10
            }
        case INITIALIZE_SCORE:
            return {
                ...state,
                currentScore: 0
            }
        case CHANGE_USERNAME:
            return {
                ...state,
                uname: action.uname
            }
        case UPDATE_SCORES:
            return {
                ...state,
                scores: [...state.scores, {score: state.currentScore, date: new Date().toString()}]
            }
        default:
            return state
    }
}