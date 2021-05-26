import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Albom from "./Albom";
import {setFiltered} from "../redux/actions";
import {useParams} from "react-router-dom";

function Alboms(props){
    const dispatch = useDispatch();
    const alboms = useSelector(state => state.alboms.alboms);
    const filter = useSelector(state => state.alboms.filter);

    const id = parseInt(useParams().id);

    const filteredAlboms = alboms
        .filter(albom => albom.userId === id)
        .filter(albom => albom.title.indexOf(filter) > -1)

    const handleChangeFilter = (e) =>{
        dispatch(setFiltered(e.target.value))
    }

    if(isNaN(id)){
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