import React from 'react';
import './Name.css'

const Name = (props) => {
    
    return (
        <h4> Name:
            {
                props.add.name
            }
       </h4>
    );
};

export default Name;