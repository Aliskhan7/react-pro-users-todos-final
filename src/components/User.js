import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../redux/actions";
import {style} from "redux-logger/src/diff";


function User(props) {
    const dispatch = useDispatch()

    const selected = useSelector(state => state.users.selectedUserId)

    const handleSelectUser = () =>{
        dispatch(selectUser(props.user.id));

    }



    return(
        <li onClick={handleSelectUser} className={selected === props.user.id ? 'selected' : ''}>
            <div className='user-name'>
                {props.user.name}
            </div>
            <div className='user-email'>
                {props.user.email}
            </div>
        </li>
    )
}

export default User;