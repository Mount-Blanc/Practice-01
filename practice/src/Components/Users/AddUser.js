import React from 'react';

import Card from '../UI/Card';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] =useState('');
    const [enteredAge, setEnteredAge] =useState('');

const addUserHandler = (event) => {
     event.preventDefault();
    }

const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
 }
 const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
 }
    return (
        <Card>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age</label>
            <input id='age' type='number'onchange= {ageChangeHandler}></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
    );



};



export default Adduser;