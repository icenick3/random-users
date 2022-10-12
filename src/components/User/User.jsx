import React from 'react';

const User = ({user:{dob,email,gender,name,nat,picture}}) => {

    return (
        <div className={'userBlock'}>
            <img src={picture.large} alt="picture"/>
            <h4>{name.title} {name.first} {name.last}</h4>
            <p>{gender}</p>
            <p>{email}</p>
            <p>{dob.date.substr(0,10)}</p>
            {nat}
        </div>
    );
};

export default User;
