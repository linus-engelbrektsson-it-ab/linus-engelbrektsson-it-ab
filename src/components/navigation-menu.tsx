import React, { FC } from "react";
import { Menu, MenuItem } from "./menu";

type NavigationMenuItemExtend = {
    label: string;
    link: string;
    className: string;
};

type NavigationMenuItem = MenuItem<NavigationMenuItemExtend>;

const renderNavigationMenuItem = (item: NavigationMenuItemExtend) => (
    <a key={item.link} href={`#${item.link}`}>
        <label
            className={`menu-item ${item.className} get-active`}
            data-path={item.link}
        >
            <div className="slide" />
            <div className="text">{item.label}</div>
            <div className="transparent">{item.label}</div>
        </label>
    </a>
);
const createNavigationMenuItem = (
    label: string,
    link: string,
    className: string
): NavigationMenuItem => ({
    render() {
        return renderNavigationMenuItem(this);
    },
    label,
    link,
    className,
});

export type NavigationMenuProps = {};

export const NavigationMenu: FC<NavigationMenuProps> = () => (
    <Menu
        items={[
            ["Introduction", "/introduction", "yellow"],
            ["Contact", "/contact", "red"],
        ].map(([label, link, className]) =>
            createNavigationMenuItem(label, link, className)
        )}
    />
);
