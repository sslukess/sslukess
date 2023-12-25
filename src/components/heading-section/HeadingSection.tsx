import React, { PropsWithChildren } from "react";

interface HeadingSectionProps {
    heading: string;
}

export function HeadingSection({
    heading, 
    children
}: PropsWithChildren<HeadingSectionProps>) {

    return (
        <section>
            <h2>{heading}</h2>
            {children}
        </section>
    )
};
