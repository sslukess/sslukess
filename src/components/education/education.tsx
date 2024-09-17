import { educations } from '../../content/education';
import styles from './education.module.css';

export interface IEducation {
    title: string;
    educator: string;
    yearFrom: string;
    yearTo: string;
    description: string;
}

const Education = ({
    title,
    educator,
    yearFrom,
    yearTo,
    description
}: IEducation) => {

    return (
        <li className={styles.eduBullet}>
            <div className={styles.titleWrapper}>
                <h3>{title}</h3>
            </div>
            <em>{yearFrom} - {yearTo}</em> @ <em className={styles.educator}>{educator}</em>
            <p>{description}</p>
        </li>
    )

};

export const Educations = () => {
    return (
        <ul className={styles.eduList}>
            {educations.map((edu, index) => <Education {...edu} key={index}/>)}
        </ul>
    )
};