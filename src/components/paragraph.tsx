import React, { FC, PropsWithChildren } from "react";

export type ParagraphProps = PropsWithChildren<{
    className?: string;
}>;

export const Paragraph: FC<ParagraphProps> = ({ children, className = "" }) => (
    <div className={`paragraph ${className}`}>{children}</div>
);
