import styles from './Header.module.css'

import odontoLogo from './assets/logo.png'

export function Header () {

    return (
        <header className={styles.header}> 
            {/*<img src={odontoLogo} alt="odontoLogo" img/>*/}
            <strong>Pró Odonto •‿• </strong> 
            
        </header>
    )

}