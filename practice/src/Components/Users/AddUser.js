import React from 'react';

const Adduser= props => {
    return (
        <form>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text'></input>
            <label htmlFor="age">Age</label>
            <input id='age' type='number'></input>
            <button type="submit">Add User</button>
        </form>
    );



};



export default Adduser;