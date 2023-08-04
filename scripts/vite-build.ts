import { build } from "vite";
import type { RollupOutput } from "rollup";
import { outDir } from "./vite-config";
import { readFile, writeFile } from "fs/promises";

const viteBuild = async () => {
    (await build({
        root: "src",
        base: "",
        build: {
            outDir: `../${outDir}`,
            assetsDir: ".",
        },
        plugins: [
            {
                name: "no-crossorigin-attribute",
                transformIndexHtml(html) {
                    return html.replace(/type="module" crossorigin/g, "");
                },
            },
        ],
    })) as RollupOutput | RollupOutput[];
    await writeFile(`${outDir}/CNAME`, await readFile("CNAME"));
};

viteBuild();
