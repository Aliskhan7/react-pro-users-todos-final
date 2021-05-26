import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../redux/actions";
import {style} from "redux-logger/src/diff";
import {NavLink, useParams} from "react-router-dom";


function User(props) {
    const id = parseInt(useParams().id);

    return(
        <li className={id ? 'selected' : ''}>
            <NavLink className='link-list' activeClassName='active' to={`${props.user.id}`}>
                <div className='user-name'>
                    {props.user.name}
                </div>
                <div className='user-email'>
                    {props.user.email}
                </div>
            </NavLink>
        </li>
    )
}

export default User;