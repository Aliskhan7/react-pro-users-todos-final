const initialState = {
    selectedUserId: null,
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
        case 'user/select':
            return{
                ...state,
                selectedUserId: action.payload,
            }

        default:
            return state
    }
}