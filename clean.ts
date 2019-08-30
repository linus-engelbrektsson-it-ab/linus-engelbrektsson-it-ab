import { promisify } from 'util';
import * as rimraf from 'rimraf';

const rmrf = promisify(rimraf);

export const clean = async (path: string) =>
  rmrf(path)
;
