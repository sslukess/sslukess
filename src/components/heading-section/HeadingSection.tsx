import React, { PropsWithChildren } from "react";
import style from './headingSection.module.css'

interface HeadingSectionProps {
    heading: string;
}

export function HeadingSection({
    heading, 
    children
}: PropsWithChildren<HeadingSectionProps>) {

    return (
        <section className={style.headingSection}>
            <h2>{heading}</h2>
            {children}
        </section>
    )
};
