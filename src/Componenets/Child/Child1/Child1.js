import React from 'react';

const Child1 = ({character}) => {
    const{id,name,status} = character
    return (
        <div>
<div>id:{id}</div>
<div>name:{name}</div>
<div>status:{status}</div>
        </div>
    );
};

export {Child1};