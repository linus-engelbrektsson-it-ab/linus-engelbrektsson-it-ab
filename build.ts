import { mkdirSync, writeFileSync } from 'fs';
import * as path from 'path';
import { renderStatic } from './src/render-static';
import { clean } from './clean';

const build = async () => {
  const outDir = './docs';

  const result = renderStatic({
    title: 'Linus Engelbrektsson IT AB',
    containerId: 'app',
  });

  await clean(outDir);

  mkdirSync(outDir);

  result.forEach(file => {
    writeFileSync(path.join(outDir, file.path), file.content);
  });
};

build();
