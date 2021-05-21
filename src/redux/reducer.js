const initialState = {
    filter: "",
    selectedUserId: null,
    alboms: [],
    users: [],

    loadingUsers: false,
    loadingAlboms: false
}

export default (state = initialState, action) =>{
    switch (action.type){
        case 'users/load/start':
            return{
                ...state,
                loadingUsers: true
            }
        case 'users/load/success':
            return{
                ...state,
                users: action.payload,
                loadingUsers: false
            }
        case 'user/select':
            return{
                ...state,
                selectedUserId: action.payload
            }

        case 'alboms/load/start':
            return{
                ...state,
                loadingAlboms: true
            }
        case 'alboms/load/success':
            return{
                ...state,
                alboms: action.payload,
                loadingAlboms: false
            }

        case 'filter/set':
            return{
                ...state,
                filter: action.payload
            }

        default:
            return state
    }
}