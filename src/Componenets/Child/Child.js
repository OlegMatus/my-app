import React, {useContext} from 'react';
import {Child1} from "./Child1/Child1";
import {AppContext} from '../../App'
const Child = ({characters}) => {
const appContext = useContext(AppContext)
    return (
        <div>
            {appContext.map(character=><Child1 key={character.id} character={character}/>)}
        </div>
    );
};

export {Child};