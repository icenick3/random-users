import React, {useEffect, useState} from 'react';
import User from "../User/User";
import axios from "axios";
import {baseURL} from "../baseURL";

const Users = ({parameters}) => {

    const [users, setUsers] = useState([])
    const params = {gender: 'all', nat: null}
    const genderParameter = localStorage.getItem('genderParams')
    const nationalityParameter = localStorage.getItem('nationalityParams')

    useEffect(()=> {
        axios.get(baseURL, {
            params,
            paramsSerializer: function paramsSerializer(params) {
                return Object.entries(Object.assign({}, params,  {gender: genderParameter, nat: nationalityParameter})).
                map(([key, value]) => `${key}=${value}`).join('&');
            }
        }).then(value => setUsers(value.data.results))
    } ,[parameters])

    return (
        <div className={'usersBlock'}>
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    );
};

export default Users;
