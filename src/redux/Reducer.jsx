import { DECREMENT, INCREMENT } from "./ActionType";


export const reducerFunction=(state={likes:0},action)=>{
    switch(action.type){
        case INCREMENT:
            return {likes:state.likes+1}
        case DECREMENT:
            return {likes:state.likes-1}
        default:
            return state
    }
}