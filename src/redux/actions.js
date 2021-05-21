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
export const selectUser = (userId) =>{
    return{
        type: "user/select",
        payload: userId
    }
}
export const setFiltered = (text) =>{
    return{
        type: 'filter/set',
        payload: text
    }
}
























// export const loadUsers = () =>{
//     return dispatch => {
//         dispatch({ type: 'users/load/start'})
//
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(json =>{
//                 dispatch({
//                     type: 'users/load/success',
//                     payload: json
//                 })
//             })
//     }
// }
//
// export const loadAlboms = () =>{
//     return dispatch => {
//         dispatch({ type: 'albums/load/start'})
//
//         fetch('https://jsonplaceholder.typicode.com/albums')
//             .then(response => response.json())
//             .then(json =>{
//                 dispatch({
//                     type: 'albums/load/success',
//                     payload: json
//                 })
//             })
//     }
// }
//
// export const selectUser = (userId) =>{
//    return{
//        type: 'users/select',
//        payload: userId
//    }
// }
//
// export const setFilterText = (text) =>{
//     return{
//         type: 'filter/set',
//         payload: text
//     }
// }
//
