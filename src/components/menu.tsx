import React from "react";

export type MenuItem<Extend = unknown> = Extend & {
    render(this: Extend): React.ReactNode;
};

export type MenuProps<Item extends MenuItem> = {
    items: Item[];
};

export const Menu = <Item extends MenuItem>({ items }: MenuProps<Item>) => (
    <div className="menu">{items.map((item) => item.render())}</div>
);
