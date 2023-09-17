import React, {useState} from 'react';

import {Avatar, Stack} from "@mui/material";

const UserInfo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div>
            <Stack direction={"column"} alignItems={"center"} onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}>
                <b>Movie</b>
                <Avatar src="/broken-image.jpg"/>
                {isHovered && <span>user</span>}
            </Stack>
        </div>
    );
};

export {UserInfo};