import React, { FC, PropsWithChildren } from "react";
import { Tooltip } from "./tooltip";

export type SoftwareDeveloperTooltipProps = PropsWithChildren;

export const SoftwareDeveloperTooltip: FC<SoftwareDeveloperTooltipProps> = ({
    children,
}) => (
    <>
        <Tooltip>
            <>
                I started to get interested in coding when I was about 10 years
                old,{" "}
            </>
            I wanted to become a game developer.
        </Tooltip>
        {children}
    </>
);
