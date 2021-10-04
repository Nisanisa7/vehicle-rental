import * as Types from '../types';

const initialState = {
    profile: {},
  };
const CustommerReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.CUST_LOGIN:
            return{
                profile: action.payload
            }
        case Types.CUST_REGISTER:
            return{
                profile: action.payload
            }
        default:
            return state
    }
}
export default CustommerReducer