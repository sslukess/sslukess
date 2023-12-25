import styles from './topBar.module.css'
import { NameWrapper } from './nameWrapper/nameWrapper';

// Types 
type TopLinkData = {
    display: string;
    url: string;
};

// Links 
const githubLink: TopLinkData = {
    display: "GitHub",
    url: "https://www.google.com"
};

const linkedInLink: TopLinkData = {
    display: "LinkedIn",
    url: "https://www.google.com"
};

const photoLink: TopLinkData = {
    display: "Photographs",
    url: "https://www.google.com"
};

const linkArray = [githubLink, linkedInLink, photoLink];


interface TopLinkProps { 
    link: TopLinkData;
    className?: string;
}

// Note that these are external links, so just an <a> is used. 
const TopLink = ({ link, className }: TopLinkProps) => (
    <a className={`${styles.topLink} ${className}`} href={link.url} target="_blank" >
        {'' + link.display + ''}
    </a>
)

export const TopBar = () => {

    return (
        <header className={styles.topBar}>
            <NameWrapper name="Luke's Space" />
            <nav className={styles.topLinks}>
                {linkArray.map((link) => <TopLink link={link} />)}
            </nav>
        </header>
    );
};