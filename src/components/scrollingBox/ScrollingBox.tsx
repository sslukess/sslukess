import styles from './scrollingBox.module.css';
import { ProjectCard } from '../card/ProjectCard';
import { projects } from '../../content/projects';

export const ScrollingBox = () => {


    return (
        <section className={styles.cards}>
            {projects.map((val) => {
                return (
                    <ProjectCard
                        title={val.title}
                        appUrl={val._appUrl}
                        codeUrl={val.codeUrl}
                        description={val.description}
                        key={val.title}
                    />
                )
            })}
        </section>
    )
};

export default ScrollingBox;