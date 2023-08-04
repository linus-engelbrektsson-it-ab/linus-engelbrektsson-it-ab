import React, { FC } from "react";
import { Paragraph } from "./paragraph";
import { Highlight } from "./highlight";
import { SoftwareDeveloperTooltip } from "./software-developer-tooltip";
import { WebDevelopmentTooltip } from "./web-development-tooltip";

export type IntroductionProps = {};

export const Introduction: FC<IntroductionProps> = () => (
    <>
        <Paragraph>Hi!</Paragraph>
        <Paragraph>
            I am a{" "}
            <Highlight>
                <SoftwareDeveloperTooltip>
                    software developer{" "}
                </SoftwareDeveloperTooltip>
            </Highlight>
            who specializes in{" "}
            <Highlight>
                <WebDevelopmentTooltip>web development</WebDevelopmentTooltip>
            </Highlight>
            .
        </Paragraph>
    </>
);
