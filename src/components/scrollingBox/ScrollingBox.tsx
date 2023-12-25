import styles from './scrollingBox.module.css';
import Card from '../card/Card';

export const ScrollingBox = () => {

    // new array with ten elements of random int between 1 and 82
    const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 82) + 1);

    return (
            <section className={styles.cards}>
                {arr.map((val, index) => {
                    return (
                        <Card key={index}/>
                    )
                })}
            </section>
    )
};

export default ScrollingBox;