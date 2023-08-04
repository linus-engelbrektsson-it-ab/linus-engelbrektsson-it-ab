import React, { FC, PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{ className?: string }>;

export const Container: FC<ContainerProps> = ({ children, className = "" }) => (
    <div className={`container ${className}`}>{children}</div>
);
