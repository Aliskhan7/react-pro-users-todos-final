import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Albom from "./Albom";
import {setFiltered} from "../redux/actions";

function Alboms(props){
    const dispatch = useDispatch();
    const alboms = useSelector(state => state.alboms);
    const selectedUserId = useSelector(state => state.selectedUserId);
    const filter = useSelector(state => state.filter);

    const filteredAlboms = alboms
        .filter(albom => albom.userId === selectedUserId)
        .filter(albom => albom.title.indexOf(filter) > -1)

    const handleChangeFilter = (e) =>{
        dispatch(setFiltered(e.target.value))
    }

    if(selectedUserId === null){
        return(
            <div className='no-user-selected'>
                Выберите из списка слева
            </div>
        )
    }
    return (
        <div className='alboms'>
            <div className='filter'>
                <input type="text"
                       placeholder='Фильтр по тексту'
                       value={filter}
                       onChange={handleChangeFilter}
                />
            </div>

            <ul>
                {filteredAlboms.map(albom =>{
                    return <Albom albom={albom} key={albom.id}/>
                })}
            </ul>
        </div>
    );
}
export default Alboms;