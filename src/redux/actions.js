export const loadUsers = () =>{
    return dispatch => {
        dispatch({type: 'users/load/start'})
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>{
                dispatch({
                    type: 'users/load/success',
                    payload: json
                })
            })
    }
}

export const loadAlboms = () =>{
    return dispatch => {
        dispatch({type: 'alboms/load/start'})
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json =>{
                dispatch({
                    type: 'alboms/load/success',
                    payload: json
                })
            })
    }
}
export const setFiltered = (text) =>{
    return{
        type: 'filter/set',
        payload: text
    }
}
