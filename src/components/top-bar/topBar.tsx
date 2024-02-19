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
    url: "https://github.com/sslukess"
};

const linkedInLink: TopLinkData = {
    display: "LinkedIn",
    url: "https://www.linkedin.com/in/luke-sampson-searle-3823ab130/"
};

const photoLink: TopLinkData = {
    display: "Photographs",
    url: "https://lukesampsear.myportfolio.com"
};

const npmLink: TopLinkData = {
    display: "NPM", 
    url: "https://www.npmjs.com/~sslukess"
}

const linkArray = [ linkedInLink, githubLink, photoLink, npmLink];


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
            <NameWrapper name="Luke's Web Page" />
            <nav className={styles.topLinks}>
                {linkArray.map((link) => <TopLink link={link} />)}
            </nav>
        </header>
    );
};