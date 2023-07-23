import React from 'react';
import {AppRoutes} from "../../Routing/AppRoutes";

import {Link} from "react-router-dom";

const NavBar = () => {
    const buttons = [
        {
            label: 'main',
            route: AppRoutes.MAIN,
        },
            {
            label: 'todos',
            route: AppRoutes.TODOS,
        },
        {
            label: 'albums',
            route: AppRoutes.ALBUMS,
        },
        {
            label: 'comments',
            route: AppRoutes.COMMENTS,
        },
    ]
    return (
        <div style={{
            width: '100%',
            height: '50px',
            backgroundColor: "orange",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            {buttons.map((btn,idx) => <Link to={btn.route} key={idx} style={{textDecoration:"none"}}>
                {btn.label}
            </Link>)}
        </div>
    );
};

export {NavBar};