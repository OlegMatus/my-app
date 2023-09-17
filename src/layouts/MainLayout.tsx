import React, {PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css'
import {useAppSelector} from "../hooks";

interface IProps extends PropsWithChildren {

}

const MainLayout: React.FC<IProps> = ({children}) => {
    const {themeSwitch} = useAppSelector(state => state.theme);
    return (
        <div className={themeSwitch ? css.black : css.white}>
            <Header/>
            <Outlet/>
            {children}
        </div>
    );
};

export {MainLayout};

