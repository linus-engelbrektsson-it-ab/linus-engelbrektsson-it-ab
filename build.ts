import { writeFile as _writeFile } from 'fs';
import { promisify } from 'util';
import * as path from 'path';
import { renderStatic } from './src/render-static';

const writeFile = promisify(_writeFile);

const build = async () => {
  const result = renderStatic({
    title: 'Linus Engelbrektsson IT AB',
    containerId: 'app',
  });

  await Promise.all(
    result.map(file =>
      writeFile(file.path, file.content)
    )
  );
};

build();
