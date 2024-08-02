import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/type"

const initialState = fromJS({
    loading: false
})

export const uiReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
  
        case SET_LOADING:

            return state.setIn(["loading"], action.payload);

        default:
            return state;
    }
}