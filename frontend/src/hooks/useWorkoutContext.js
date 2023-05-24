import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

const useWorkoutContext = () => {
    // returns the value of the context, w/ state and dispatch function
    const context = useContext(WorkoutContext)

    // error handling
    if(!context){
        throw Error('Error.')
    }
    
    // returns the state
    return context
}

export default useWorkoutContext