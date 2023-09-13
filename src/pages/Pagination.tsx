import React from 'react';
import {FC, PropsWithChildren} from 'react';

interface IProps extends PropsWithChildren {

}

const Pagination: FC<IProps> = () => {
    return (
        <div>
            Pagination
        </div>
    );
};

export {Pagination};