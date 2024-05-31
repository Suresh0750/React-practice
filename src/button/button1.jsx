
// three types of css

// External
// Module
// Internal


// This is Module


import styles from './Button.module.css'

function Button1(){
    return(
        <button className={styles.button}>save me</button>
    )
}


export default Button1