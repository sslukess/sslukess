import type { Skill } from '../../content/skills';
import { mappedLangs, mappedFrameworks, mappedPlatforms } from '../../content/skills';
import styles from './skills.module.css'

type SkillProps = Skill;

const Skill = ({ skill, category }: SkillProps) => {

    return (
        <div className={`${styles[category]} ${styles.skill}`}>
            {skill}
        </div>
    )
};

export const Skills = () => {

    return (
        <>
            {/* Langs */}
            <div className={styles.skillsWrapper}>
                {mappedLangs.map((item, index) => <Skill skill={item.skill} category={item.category} key={index}/>)}
            </div>

            {/* frameworks */}
            <div className={styles.skillsWrapper}>
                {mappedFrameworks.map((item, index) => <Skill skill={item.skill} category={item.category} key={index} />)}
            </div>

            {/* platfroms */}
            <div className={styles.skillsWrapper}>
                {mappedPlatforms.map((item, index) => <Skill skill={item.skill} category={item.category} key={index}/>)}
            </div>
        </>
    );
};