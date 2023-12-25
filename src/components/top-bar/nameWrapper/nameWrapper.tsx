import React, { PropsWithChildren } from "react"
import styles from './nameWrapper.module.css'

interface NameWrapperProps {
    name: string;

}

export function NameWrapper({ name, children }: PropsWithChildren<NameWrapperProps>) {

    return (
        <div className={styles.nameContainer} >
            <h1 className={styles.name}>
                {name}
            </h1>
        </div>
    )
};