
import styles from "./home.module.scss"
import ProfileCard from "@/components/ProfileCard"
export default function home(){
    return(
        <>
        <div className={styles.cardContainer}>
        <section className={styles.leftSection}>
         <ProfileCard content={["bike","car"]}></ProfileCard>
            </section>  
        
       
         <section className={styles.rightSection}>
         <ProfileCard content={["apple","orange"]}></ProfileCard>
            </section>  
        </div>   
         
        </>
    )
}