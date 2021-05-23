const initialState = {
    filter: "",
    alboms: [],
    loadings: false
}

export default (state = initialState, action) =>{
    switch (action.type){
        case 'alboms/load/start':
            return{
                ...state,
                loading: true
            }
        case 'alboms/load/success':
            return{
                ...state,
                alboms: action.payload,
                loading: false
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