import React, { FC } from "react";
import { Paragraph } from "../components/paragraph";
import { Highlight } from "../components/highlight";
import { SoftwareDeveloperTooltip } from "../components/software-developer-tooltip";
import { WebDevelopmentTooltip } from "../components/web-development-tooltip";

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
