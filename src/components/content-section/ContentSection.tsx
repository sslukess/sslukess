import React, { PropsWithChildren } from "react";
import style from './contentSection.module.css'

interface HeadingSectionProps {
    heading: string;
}

export function ContentSection({
    heading, 
    children
}: PropsWithChildren<HeadingSectionProps>) {

    return (
        <section className={style.contentSection}>
            <h2>{heading}</h2>
            {children}
        </section>
    )
};
