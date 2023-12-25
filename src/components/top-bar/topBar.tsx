import styles from './topBar.module.css'

// Types 
type TopLinkProps = {
    display: string;
    url: string;
};

// Links 
const githubLink: TopLinkProps = {
    display: "GitHub",
    url: "https://www.google.com"
};

const linkedInLink: TopLinkProps = {
    display: "LinkedIn",
    url: "https://www.google.com"
};

const photoLink: TopLinkProps = {
    display: "Photographs",
    url: "https://www.google.com"
};

const linkArray = [githubLink, linkedInLink, photoLink];

// Note that these are external links, so just an <a> is used. 
const TopLink = ({ link }: {link: TopLinkProps}) => (
    <a className={styles.topLink} href={link.url} target="_blank" >
        {'' + link.display + ''}
    </a>
)


export const TopBar = () => {

    return (
        <nav className={styles.topBar}>
            {linkArray.map((link) => <TopLink link={link} />)}
        </nav>
    );
};