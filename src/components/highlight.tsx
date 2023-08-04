import React, { FC, PropsWithChildren } from "react";

export type HighlightProps = PropsWithChildren;

export const Highlight: FC<HighlightProps> = ({ children }) => (
    <span className="highlight">{children}</span>
);
