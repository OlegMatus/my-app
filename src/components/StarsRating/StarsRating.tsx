import React, {useState} from 'react';
import {FC, PropsWithChildren} from 'react';
import {Box, Rating} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

interface IProps extends PropsWithChildren {
    vote_average: number
}

const labels: { [index: string]: string } = {

    // 0.5: 'Useless',
    // 1: 'Useless+',
    // 1.5: 'Poor',
    // 2: 'Poor+',
    // 2.5: 'Ok',
    // 3: 'Ok+',
    // 3.5: 'Good',
    // 4: 'Good+',
    // 4.5: 'Excellent',
    // 5: 'Excellent+',
};

const StarsRating: FC<IProps> = ({vote_average}) => {
    const [value, setValue] = useState<number | null>(vote_average);
    const [hover, setHover] = useState(-1);

    function getLabelText(voteAverage: number) {
        return `${vote_average} Star${vote_average !== 1 ? 's' : ''}, ${labels[voteAverage]}`;
    }

    return (
        <div>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="vote_average"
                    value={value}
                    max={10}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                />
                {vote_average !== null && (
                    <Box sx={{ml: 2}}>{labels[hover !== -1 ? hover : vote_average ]}</Box>
                )}
            </Box>
        </div>
    );
};

export {StarsRating};