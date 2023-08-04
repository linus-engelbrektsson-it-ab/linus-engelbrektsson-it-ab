import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../src/app";
import { ModuleKind, transpileModule } from "typescript";
import { readFile } from "fs/promises";
import path from "path";

const srcFile = async (relativePath: string) =>
    (await readFile(path.join(__dirname, '../src', relativePath))).toString();

export type RenderTarget = {
    path: string;
    content: () => Promise<string>;
};

export const renderTargets: RenderTarget[] = [
    {
        path: "index.html",
        content: async () =>
            `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Linus Engelbrektsson IT AB</title>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
            <link rel="stylesheet" href="styles.css">
          </head>
        </html>
        <body>
          <div id="app">
            ${ReactDOMServer.renderToStaticMarkup(<App />)}
          </div>
          <script>window.exports = {};</script>
          <script src="index.js"></script>
        </body>
      `
                .split("\n")
                .map((s) => s.trim())
                .join(""),
    },
    {
        path: "styles.css",
        content: async () => await srcFile("styles.css"),
    },
    {
        path: "index.js",
        content: async () =>
            transpileModule(await srcFile("static-script.ts"), {
                compilerOptions: { module: ModuleKind.CommonJS },
            }).outputText,
    },
];
