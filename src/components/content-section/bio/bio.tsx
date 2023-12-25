import React from "react";
import { content } from '../../../content/bioContent'

type BioProps = {
    content: string; 
}

const Bio = ({content}: BioProps) => { 
    return <p>{content}</p>
}

// This is the above compontent with the content insterted. 
export const FilledBio = () => <Bio content={content} />




