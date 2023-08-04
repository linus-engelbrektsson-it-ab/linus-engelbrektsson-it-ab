import React, { FC, PropsWithChildren } from "react";
import { Paragraph } from "./paragraph";

export type FooterTextProps = PropsWithChildren;

export const FooterText: FC<FooterTextProps> = ({ children }) => (
    <Paragraph className="footer-text">{children}</Paragraph>
);
