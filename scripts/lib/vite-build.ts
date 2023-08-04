import { build, defineConfig } from "vite";
import { outDir } from "./vite-config";
import { readFile, writeFile } from "fs/promises";
import { createHtmlPlugin } from "vite-plugin-html";

export const viteBuild = async (watch?: boolean) => {
    await build(
        defineConfig({
            root: "src",
            base: "",
            build: {
                outDir: `../${outDir}`,
                assetsDir: ".",
                watch: watch ? {} : undefined,
                emptyOutDir: true,
            },
            esbuild: {
                minifyIdentifiers: true,
                minifySyntax: true,
                minifyWhitespace: true,
            },
            plugins: [
                {
                    name: "no-crossorigin-attribute",
                    transformIndexHtml(html) {
                        return html
                            .replace(/type="module" crossorigin/g, "")
                            .replace(/"\.\//g, '"');
                    },
                },
                createHtmlPlugin({
                    minify: true,
                }),
            ],
        })
    );
    await writeFile(`${outDir}/CNAME`, await readFile("CNAME"));
};
