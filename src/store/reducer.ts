
import { Action,ReducerState } from "../../src/components/glavnaya/interfaces";

const storageCart = localStorage.getItem('cart')

export const initialState: ReducerState = {
  arenda: [],
  cart: storageCart ? JSON.parse(storageCart) : [],
  searchString: '',
}
export default (state: ReducerState = initialState, action:Action)=>{
  const {type} = action;
  switch(type){
    case "SET_MAIN_STATE" :
      return { ...state}
    default:
      return state
  }
}
