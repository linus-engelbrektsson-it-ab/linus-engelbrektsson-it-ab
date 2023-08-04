import { rimraf } from "rimraf";
import { renderTargets } from "./render-targets";

export const clean = async () => {
    await Promise.all(
        renderTargets.map(async ({ path }) => await rimraf(path))
    );
    console.log(
        `Removed target files:\n\n${renderTargets
            .map((rt) => rt.path)
            .join("\n")}`
    );
};

clean();
