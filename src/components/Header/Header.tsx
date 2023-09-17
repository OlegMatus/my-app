import React from 'react';
import {Link} from "react-router-dom";

import css from './header.module.css'
import {alpha, styled, Switch} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../redux";
import {blueGrey} from "@mui/material/colors";
import {UserInfo} from "../UserInfo";


const SwitchTheme = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: blueGrey[800],
        '&:hover': {
            backgroundColor: alpha(blueGrey[800], theme.palette.action.hoverOpacity),
        },
    },
}));

const label = {inputProps: {'aria-label': 'Color switch demo'}};
const Header = () => {
    const {themeSwitch} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();
    return (
        <div className={css.Header}>
            <div className={css.links}>
                <Link to={'movies'}>Movies</Link>
                <Link to={'genres'}>Genres</Link>
                <Link to={'search'}>Search</Link>
            </div>
            <div className={css.Switch}>
                <UserInfo/>
                <SwitchTheme {...label} defaultChecked={themeSwitch}
                             onChange={(event) => dispatch(themeActions.changeThemeSwitch())}/>
                <div>LightTheme</div>
            </div>
        </div>
    )

};

export {Header};