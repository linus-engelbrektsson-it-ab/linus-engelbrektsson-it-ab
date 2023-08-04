import { rimraf } from "rimraf";
import { outDir } from "./vite-config";

const viteClean = async () => {
    rimraf(outDir);
};

viteClean();
