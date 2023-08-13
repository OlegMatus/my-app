import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {charactersService} from "../../../services";
import {charactersActions} from "../../../reduxCore";
import Character from "../Character/Character";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state:{ids}} = useLocation();

    useEffect(() => {
        charactersService.getByIds(ids).then(({data}) => {
            dispatch(charactersActions.set(data))})
    }, [dispatch]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;