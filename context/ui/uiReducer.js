export const uiReducer = ( state, action ) => {
  switch (action) {
    case 'Open':
       return {
        ...state,
        sidemenuOpen: true,
       }
    case 'Close':
       return {
        ...state,
        sidemenuOpen: false,
       }
 
    default:
     return state;
  }

}