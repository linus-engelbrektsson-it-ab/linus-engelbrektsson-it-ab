import React, { FC } from "react";
import { Container } from "./container";
import { FooterText } from "./footer-text";

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => (
    <Container className="footer-container">
        <FooterText>Linus Engelbrektsson IT AB</FooterText>
        <FooterText>
            <label>E-mail:</label>
            <label>
                <a href="mailto:linus.engelbrektsson.it@gmail.com">
                    linus.engelbrektsson.it@gmail.com
                </a>
            </label>
        </FooterText>
    </Container>
);
