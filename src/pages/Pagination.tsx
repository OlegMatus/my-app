import React from 'react';
import {FC, PropsWithChildren} from 'react';
import css from './Pagination.module.css'

interface IProps extends PropsWithChildren {

}

const Pagination: FC<IProps> = () => {
    return (
        <div className={css.Pagination}>

        </div>
    );
};

export {Pagination};