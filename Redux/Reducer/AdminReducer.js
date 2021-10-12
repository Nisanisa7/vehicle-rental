import * as Types from '../types';

const initialState = {
    profile: {},
  };
const AdminReducer = (state = initialState, action) => {
    switch (action.type){
        case Types.AVATAR:
            return{
                ...state,
                profile: action.payload.profile
            }
        case 'LOGIN':
            return{
                profile: action.payload
            }
        case Types.CUST_REGISTER:
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
        case 'REMOVE_STATE':
            return {
                profile: {}
            };    
        default:
            return state
    }
}
export default AdminReducer