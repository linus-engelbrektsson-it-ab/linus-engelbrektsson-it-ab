import React from "react";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { Footer } from "./components/footer";
import { RouterProvider } from "./lib/router";

export const App = () => (
    <RouterProvider>
        <article>
            <Header />
            <MainContent />
            <Footer />
        </article>
    </RouterProvider>
);
