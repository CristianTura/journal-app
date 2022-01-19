import { types } from "../types/types";

const initilaState = {
    loading: false,
    msgError: null,
    showSidebar: true
}

export const uiReducer = ( state = initilaState, action ) => {

    switch ( action.type) {
        case types.uiSetError:
            
            return {
                ...state,
                msgError: action.payload
            };

        case types.uiRemoveError:
        
            return {
                ...state,
                msgError: null
            };

        case types.uiStartLoading:
    
            return {
                ...state,
                loading: true
            };

        case types.uiFinishLoading:

            return {
                ...state,
                loading: false
            };

        case types.uiToggleSidebar:
            return{
                ...state,
                showSidebar: !state.showSidebar
            }
    
        default:
            return state;
}};