import React, { PropsWithChildren } from "react";
import style from './contentSection.module.css'

interface HeadingSectionProps {
    heading: string;
    decoration?: string;
}

export function ContentSection({
    heading, 
    decoration,
    children
}: PropsWithChildren<HeadingSectionProps>) {

    return (
        <section className={style.contentSection}>
            <h2>{heading}</h2>
            <em>{decoration}</em>
            {children}
        </section>
    )
};
