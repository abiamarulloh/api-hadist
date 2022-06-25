import styles from './layouts.module.css';

export default function header() {
    return (
        <>
         <div className={styles.header}>
             <h1>Hadist App</h1>
             <h2>STMIK Antar Bangsa</h2>
         </div>
        </>
    )
}