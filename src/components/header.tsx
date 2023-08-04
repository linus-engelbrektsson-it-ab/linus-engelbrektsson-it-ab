import React, { FC } from "react";
import { Container } from "./container";
import { NavigationMenu } from "./navigation-menu";

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => (
    <Container className="header-container">
        <h1 className="header">Linus Engelbrektsson IT AB</h1>
        <h2 className="sub-header">Software Developer</h2>
        <NavigationMenu />
    </Container>
);
