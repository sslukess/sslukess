import { IProject } from '../../content/projects';

import styles from './card.module.css';


// function randomColor() {
//     const calculatedRandomColor = Math.floor(Math.random() * 16777215).toString(16);
//     return "#" + calculatedRandomColor;
// }

export interface CardProps extends IProject {

};

const Card = ({
    title,
    appUrl,
    codeUrl,
    description
}: CardProps) => {

    return (
        <>
            <div className={styles.card} >

                <div className={styles.textWrapper} >
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className={styles.buttonWrapper}>
                    {/* Link to the App */}
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.open(appUrl, '_blank');
                    }}> View</button>

                    {/* Link to the code */}
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.open(codeUrl, '_blank');
                    }}> Code</button>
                </div>

            </div>
        </>
    )
};

export default Card;