import axios from 'axios';
import types from '../types';


export function getUserProfile (email) {
    return (dispatch) => {
        axios.get(`/user/profile/${email}`).then((res)=>{
            let profile = res.data
            dispatch({type: types.SET_PROFILE, profile})
        }).catch(err=>console.log(err))
    }
}