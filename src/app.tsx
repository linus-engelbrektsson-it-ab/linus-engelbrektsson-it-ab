import React from "react";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { Footer } from "./components/footer";

export const App = () => (
    <article>
        <Header />
        <MainContent />
        <Footer />
    </article>
);
