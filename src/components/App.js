import Alboms from "./Alboms";
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadAlboms, loadUsers} from "../redux/actions";
import ReactLoading from 'react-loading';
import {Route} from 'react-router-dom';
import '../main.css'

function App(){
    const dispatch = useDispatch()
    const loadingUsers = useSelector(state => state.users.loading)
    const loadingAlboms = useSelector(state => state.alboms.loading)

    useEffect(() =>{
        dispatch(loadUsers());
        dispatch(loadAlboms());
    }, [])

    if(loadingAlboms || loadingUsers){
        return (
            <div className='loading'>
                <ReactLoading type='spin' color='#0033ff' height={70} width={70} />
            </div>
        )
    }
    return(
        <div className='container'>
            <Users/>
            <Route path='/:id?'>
                <Alboms/>
            </Route>
        </div>
    )
}
export default App;
