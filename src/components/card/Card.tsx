import styles from './card.module.css';

function randomColor() {
    const calculatedRandomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + calculatedRandomColor;
}

interface CardProps {

}

const Card = ({ }: CardProps) => {

    // each card is randomly colored
    const color = randomColor();

    return (
        <>
            <div className={styles.card} style={{ backgroundColor: color }}>
               {"I AM CONTENT"}
            </div>
        </>
    )
};

export default Card;