import { rimraf } from "rimraf";
import { outDir } from "./lib/vite-config";

const viteClean = async () => {
    rimraf(outDir);
};

viteClean();
