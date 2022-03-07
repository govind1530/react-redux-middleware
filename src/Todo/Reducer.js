import {ADD_TODO,REMOVE_TODO} from './action.types';

export default (state,action) =>{

    const {type,payload} = action;
    switch(type){
        case ADD_TODO:
            return [...state,payload];

        case REMOVE_TODO:
            return state.filter((todo)=>todo.id !== payload)
    }
}