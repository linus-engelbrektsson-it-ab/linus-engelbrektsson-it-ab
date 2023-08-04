import React, { FC, PropsWithChildren } from "react";
import { Tooltip } from "./tooltip";
import { Paragraph } from "./paragraph";

export type WebDevelopmentTooltipProps = PropsWithChildren;

export const WebDevelopmentTooltip: FC<WebDevelopmentTooltipProps> = ({
    children,
}) => (
    <>
        <Tooltip>
            <Paragraph>
                In recent years, I have been studying and working mostly with
                web development.
            </Paragraph>
            <Paragraph>
                I have learned modern web development techniques such as SPA and
                Restful API.
            </Paragraph>
        </Tooltip>
        {children}
    </>
);
