import { build } from "vite";
import type { RollupOutput } from "rollup";

const viteBuild = async () => {
    const output = (await build({
        root: "src",
        base: "",
        build: {
            outDir: "../dist",
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

    if (output instanceof Array) {
        console.log("[]:", output.length);
    } else {
        console.log("_:", output.output.length);
    }
};

viteBuild();
