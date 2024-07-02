// Components 
import { useWindowWide } from '../../lib/hooks/useWindowSize'

// Assets
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

import styles from './footer.module.css'

export const Footer = () => {

    const smallerHeader = !useWindowWide(780);

    return (
        <footer className={styles.footer}>
            
            <div className={styles.div}>
                <span className={styles.span}> © Luke Sampson Searle, 2024 </span>
            </div>

            {/* As the footer gets crowded at mobile width, this is only rendered if not mobile */}
            { smallerHeader ? null :
            
            <div className={styles.div}>
                
                <span className={styles.span}>{" App created with React "}</span>
                <img 
                className={styles.div}
                 src={reactLogo}
                alt="React logo" 
                onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.react.dev", '_blank');
                }} />
                
                <span className={styles.span}>{" and Vite "}</span>
                <img 
                className={styles.div} 
                src={viteLogo} 
                alt="Vite logo" 
                onClick={(e) => {
                    e.preventDefault();
                    window.open("https://vitejs.dev", '_blank');
                }}
                />
            </div>}
        </footer>
    )
}