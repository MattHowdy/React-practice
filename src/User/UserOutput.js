import React from 'react';


const userOutput = (props) => {
    return (
        <div className="container">
            <div className="userOutput">
                <p>I'm a paragprah.</p>
                <p>My username is: {props.user}.</p>
            </div>
        </div>
    )
};

export default userOutput; 