import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { readFileSync } from 'fs';
import * as path from 'path';
import { App } from './app';
import { transpileModule, ModuleKind } from 'typescript';

export type RenderStaticOptions = {
  title?: string;
  containerId: string;
};

export type RenderFile = {
  path: string;
  content: string;
};

export type RenderResult = RenderFile[];

export const renderStatic = ({
  title = 'Web Site',
  containerId,
}: RenderStaticOptions): RenderResult => {
  return [
    {
      path: 'index.html',
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
            <link rel="stylesheet" href="styles.css">
          </head>
        </html>
        <body>
          <div id="${containerId}">
            ${ReactDOMServer.renderToStaticMarkup(<App />)}
          </div>
          <script>window.exports = {}</script>
          <script src="index.js"></script>
          <script>window.___initialize___()</script>
        </body>
      `.split('\n').map(s => s.trim()).join(''),
    },
    {
      path: 'styles.css',
      content: readFileSync(path.join(__dirname, './styles.css')).toString(),
    },
    {
      path: 'index.js',
      content: transpileModule(
        readFileSync(path.join(__dirname, './static-script.ts')).toString(),
        { compilerOptions: { module: ModuleKind.CommonJS } }
      ).outputText,
    },
  ];
};
