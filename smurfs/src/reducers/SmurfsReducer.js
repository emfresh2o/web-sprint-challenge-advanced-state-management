import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL, POST_DATA, POST_SUCCESS, POST_FAIL, DELETE_DATA, DELETE_SUCCESS, DELETE_FAIL, UPDATE_DATA, UPDATE_SUCCESS, UPDATE_FAIL } from "../actions/actions";
  const initialState ={
    smurfs: [],
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    isUpdating: false,
    error: ""
}


const smurfsReducer = (state=initialState, actions) => {
    switch(actions.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetching: true
                
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfs: actions.payload
            }
        case FETCH_FAIL:
            return{
                ...state,
                isFetching: false,
                error: actions.payload
            }
        case POST_DATA:
            return{
                ...state,
                isPosting: true,
                smurfs: [...state.smurfs]
                            
            }
        case POST_SUCCESS:
            return{
                ...state,
                isPosting: false,
                smurfs:actions.payload
            }
        case POST_FAIL:
            return{
                ...state,
                isPosting: false,
                error: actions.payload
            }
        case DELETE_DATA:
            return {
                ...state,
                isDeleting: true,
                smurfs: [...state.smurfs]
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                smurfs:actions.payload
            }
        case DELETE_FAIL:
            return {
                ...state,
                isDeleting: false,
                error: actions.payload
            }
        case UPDATE_DATA:
            return {
                ...state,
                isUpdate: true,
                smurfs: [...state.smurfs]
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                isUpdate: false,
                smurfs:actions.payload
            }
        case UPDATE_FAIL:
            return {
                ...state,
                isUpdate: false,
                error: actions.payload
            }
        default:
            return state
    }
}
  export default smurfsReducer