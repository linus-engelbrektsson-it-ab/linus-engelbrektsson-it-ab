import React, { FC } from "react";
import { Container } from "./container";

export type SideContentProps = {};

export const SideContent: FC<SideContentProps> = () => (
    <Container className="side-container">
        <a href="/#1">1</a>
    </Container>
);
