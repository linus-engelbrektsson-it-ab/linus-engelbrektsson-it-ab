import { rimraf } from "rimraf";

const viteClean = async () => {
    rimraf("dist");
};

viteClean();
