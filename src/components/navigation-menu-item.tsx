import React, { FC } from "react";

export type NavigationMenuItemProps = {
    link: string;
    label: string;
    className: string;
};

export const NavigationMenuItem: FC<NavigationMenuItemProps> = ({
    link,
    className,
    label,
}) => (
    <a key={link} href={`#${link}`}>
        <label className={`menu-item ${className} get-active`} data-path={link}>
            <div className="slide" />
            <div className="text">{label}</div>
            <div className="transparent">{label}</div>
        </label>
    </a>
);
