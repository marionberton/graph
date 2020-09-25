import React from 'react';


export const initialState = {
  phase: 1,
  days: 34,
  date: 14/2/2020,
}
type State = typeof initialState

const reducer = (state: State, action:any) => {
  console.log('ACTIONS',action);
  switch (action.type) {
    case "SET_PHASE":
      return {
        ...state,
        phase: action.phase
      }
    case "UPDATE_DAYS":
      return {
        ...state,
        phase: action.phase
      }
    case "SET_DATE":
      return {
        ...state,
        phase: action.phase
      }
    default:
      return{ state };
  }
}

export default reducer