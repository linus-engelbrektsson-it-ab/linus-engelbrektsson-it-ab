import React, { FC } from "react";
import { Menu } from "./menu";
import { NavigationMenuItem } from "./navigation-menu-item";

export type NavigationMenuProps = {};

export const NavigationMenu: FC<NavigationMenuProps> = () => (
    <Menu>
        {[
            ["Introduction", "/introduction", "yellow"],
            ["Contact", "/contact", "red"],
        ].map(([label, link, className]) => (
            <NavigationMenuItem
                key={link}
                label={label}
                link={link}
                className={className}
            />
        ))}
    </Menu>
);
