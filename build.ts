import { existsSync, writeFileSync, mkdirSync, statSync, rmdirSync } from 'fs';
import * as path from 'path';
import { renderStatic } from './src/render-static';

const outDir = './docs';

const result = renderStatic({
  title: 'Linus Engelbrektsson IT AB',
  containerId: 'app',
});

const haveBuildDir = existsSync(outDir);

if (haveBuildDir) {
  rmdirSync(outDir);
}

mkdirSync(outDir);

result.forEach(file => {
  writeFileSync(path.join(outDir, file.path), file.content);
});
