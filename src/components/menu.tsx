import React, { FC, PropsWithChildren } from "react";

export type MenuProps = PropsWithChildren;

export const Menu: FC<MenuProps> = ({ children }) => (
    <div className="menu">{children}</div>
);
