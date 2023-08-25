import styles from "./layout.module.scss"

export default function profileAppLayout({children}){
    return(
        <>
        <div className={styles.container}>
           {children}   
        </div>
        </>
    )
}