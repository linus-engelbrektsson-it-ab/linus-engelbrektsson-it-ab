import { writeFile } from "fs/promises";
import { renderStatic } from "./render-static";
import { renderTargets } from "./render-targets";

const build = async () => {
    const result = await renderStatic();

    await Promise.all(result.map((file) => writeFile(file.path, file.content)));

    console.log(
        `Built target files:\n\n${renderTargets
            .map((rt) => rt.path)
            .join("\n")}`
    );
};

build();
