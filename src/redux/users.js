const initialState = {
    users: [],
    loading: false,
}

export default (state = initialState, action) =>{
    switch (action.type){
        case 'users/load/start':
            return{
                ...state,
                loading: true
            }
        case 'users/load/success':
            return{
                ...state,
                users: action.payload,
                loading: false
            }

        default:
            return state
    }
}