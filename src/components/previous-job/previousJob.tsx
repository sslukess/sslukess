import { previousJobs } from '../../content/previousJobs';
import styles from './previousJob.module.css'

export interface IPreviousJob {
    title: string;
    employer: string;
    yearFrom: string;
    yearTo: string;
    description: string;
}

const PreviousJob = ({
    title,
    employer,
    yearFrom,
    yearTo,
    description
}: IPreviousJob) => {

    return (
        <li className={styles.jobBullet}>
            <div className={styles.titleWrapper}>
                <h3>{title}</h3>
            </div>
            <em>{yearFrom} - {yearTo}</em> @ <em className={styles.employer}>{employer}</em>
            <p>{description}</p>
        </li>
    )

};

export const PreviousJobs = () => {
    return (
        <ul className={styles.jobList}>
            {previousJobs.map((job, index) => <PreviousJob {...job} key={index}/>)}
        </ul>
    )
}