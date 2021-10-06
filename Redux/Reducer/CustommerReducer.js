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
        case Types.UPDATE_CUSTOMMER:
            console.log('halo', state.profile.data);
            return{
                ...state,
                profile: action.payload
            }
        case Types.AVATAR_CUSTOMMER:
            return{
                profile: action.payload
            }
        case 'CHANGE_VALUE':
            return{
                profile:{
                ...state.profile,
                ...action.payload
                },
            }
        default:
            return state
    }
}
export default CustommerReducer