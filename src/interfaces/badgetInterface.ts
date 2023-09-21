import {ReactNode} from "react";

export interface BadgeProps {
    color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    badgeContent: ReactNode;
}