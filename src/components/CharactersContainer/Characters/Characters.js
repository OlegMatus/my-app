import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../../redux";
import {useLocation} from "react-router-dom";
import Character from "../Character/Character";
import css from './Characters.module.css'
const Characters = () => {
    const {state:{ids}} = useLocation();
    const dispatch = useDispatch();
const {characters} = useSelector(state => state.characters);

    useEffect(() => {
        dispatch(charactersActions.getByiDs({ids}))
    }, []);
    return (
        <div className={css.Characters}>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};


export default Characters;