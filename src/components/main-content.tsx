import React, { FC } from "react";
import { Container } from "./container";
import { Route } from "./route";
import { Introduction } from "./introduction";
import { Contact } from "./contact";

export type MainContentProps = {};

export const MainContent: FC<MainContentProps> = () => (
    <div style={{ display: "flex", flexGrow: 1 }}>
        <Container className="main-container">
            <Route path="/introduction">
                <Introduction />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Container>
    </div>
);
