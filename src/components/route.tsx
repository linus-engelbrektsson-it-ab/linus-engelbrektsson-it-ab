import React, { FC, PropsWithChildren } from "react";

export type RouteProps = PropsWithChildren<{
    path: string;
}>;

export const Route: FC<RouteProps> = ({ children, path }) => (
    <div className="route" data-path={path}>
        {children}
    </div>
);
