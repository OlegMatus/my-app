import React from 'react';
import {useAppReducer} from "../hooks/useAppReducer";
import {authService} from "../services/authService";
import {authActions} from "../reducers/authReducer";

const Header = () => {
    const [{me}, dispatch] = useAppReducer(state => state.auth);

    if (!me) {
        authService.me().then(({data}) => dispatch(authActions.setMe(data)))
    }

    return (
        <div>
            {me && <h1>{me.username}</h1>}
        </div>
    );
};

export default Header;