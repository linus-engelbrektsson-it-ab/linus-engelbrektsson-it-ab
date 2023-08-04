import React, { FC } from "react";
import { Paragraph } from "./paragraph";

export type ContactProps = {};

export const Contact: FC<ContactProps> = () => (
    <>
        <Paragraph>
            E-mail:{" "}
            <a href="mailto:linus.engelbrektsson.it@gmail.com">
                linus.engelbrektsson.it@gmail.com
            </a>
        </Paragraph>
    </>
);
