import React from 'react';
// import {FC, PropsWithChildren} from 'react';
import {Badge} from "@mui/material";
import {OverridableComponent, OverrideProps} from "@mui/material/OverridableComponent";
import {BadgeTypeMap} from "@mui/material/Badge/Badge";

// interface IProps extends PropsWithChildren {
//
// }
export type BadgeProps<
    RootComponent extends React.ElementType = BadgeTypeMap['defaultComponent'],
    AdditionalProps = {},
> = OverrideProps<BadgeTypeMap<RootComponent, AdditionalProps>, RootComponent> & {
    component?: React.ElementType;
};


const GenreBadge: OverridableComponent<BadgeTypeMap> = () => {
    return (
        <div>
            GenreBadge
            <Badge color={"primary"}>
                Primary
            </Badge>
        </div>
    );
};

export {GenreBadge};