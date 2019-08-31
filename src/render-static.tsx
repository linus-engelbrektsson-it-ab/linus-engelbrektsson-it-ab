import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { readFileSync } from 'fs';
import * as path from 'path';
import { App } from './app';

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
            <link rel="stylesheet" href="styles.css">
          </head>
        </html>
        <body>
          <div id="${containerId}">
            ${ReactDOMServer.renderToStaticMarkup(<App />)}
          </div>
        </body>
      `.split('\n').map(s => s.trim()).join(''),
    },
    {
      path: 'styles.css',
      content: readFileSync(path.join(__dirname, './styles.css')).toString(),
    },
  ];
};
