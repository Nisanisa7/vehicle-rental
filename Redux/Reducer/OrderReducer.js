
const initialState = {
    order: [],
    booking: {}

}
const OrderReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ORDER':
            return{
                ...state,
                order: action.payload
            }
        case 'INPUT_ORDER':
            return{
                ...state,
                booking: action.payload
            }
        default:
            return state
    }
}

export default OrderReducer
