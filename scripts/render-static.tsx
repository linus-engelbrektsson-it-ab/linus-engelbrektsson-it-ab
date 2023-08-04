import { renderTargets } from "./render-targets";

export type RenderResult = { path: string; content: string }[];

export const renderStatic = async (): Promise<RenderResult> =>
    await Promise.all(
        renderTargets.map(async ({ path, content }) => ({
            path,
            content: await content(),
        }))
    );
