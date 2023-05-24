import { createContext, useReducer } from "react";


export const WorkoutContext = createContext()

// taking previous state value and passing action via dispatch, depending on action taken
// keeps state in sync w/ database
export const workoutsReducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_WORKOUTS':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({ children }) => {
    // useReducer hook to initiate/update state value
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
    // accept the object to execute, payload data to update state
    

    return (
        // wraps the entire component tree
        // children is essentially the root app, prop passed down from main.jsx
        // dynamic state value
        <WorkoutContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutContext.Provider>
    )
}