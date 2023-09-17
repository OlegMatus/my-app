import React from 'react';
import {FC, PropsWithChildren} from 'react';

import {useAppSelector} from "../../hooks";
import {Pagination, Stack, Typography} from "@mui/material";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const PaginationMovie: FC<IProps> = () => {
    const {totalPages} = useAppSelector(state => state.movies);
    // const [page, setPage] = React.useState(1);
    const [query,setQuery] = useSearchParams({page: '1'});
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setQuery(prev => {
            prev.set('page',(page+1).toString())
            return prev
        })
    }
    return (
        <div>
            {totalPages && (
                <Stack>
                    <Typography>Page: {+query.get('page')}</Typography>
                    <Pagination count={totalPages} page={+query.get('page')-1} onChange={handleChange}/>
                </Stack>
            )}
        </div>
    );
};

export {PaginationMovie};