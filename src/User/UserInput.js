import React from 'react';


const userInput = (props) => {
    return (
        <div className="container">
            <div className="userInput">
                <input type="text" onChange={props.changed} value={props.user}/>
            </div>
        </div>
    )
};

export default userInput; 