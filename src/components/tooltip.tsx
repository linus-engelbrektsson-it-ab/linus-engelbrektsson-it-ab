import React, { FC, PropsWithChildren } from "react";

export type TooltipProps = PropsWithChildren;

export const Tooltip: FC<TooltipProps> = ({ children }) => (
    <div className="tooltip">{children}</div>
);
