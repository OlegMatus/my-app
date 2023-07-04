import React from 'react';

const Simpsons = (props) => {
    const{name, surname,age,gender,photo} = props
    return (
<div>
    {/*<h1>Simpsons Family</h1>*/}
        <div>
<h2>{name}</h2>
<h2>{surname}</h2>
<h4>{age}</h4>
<h4>{gender}</h4>
<img src={photo} alt={name} width={300} height={300}/>
        </div>
    </div>
    );
};

export default Simpsons;