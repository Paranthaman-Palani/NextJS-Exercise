import styles from "./about.module.scss"
import ProfileCard from "@/components/ProfileCard"
export default function about(){
    return(
        <>
        <div className={styles.container}>
            <ProfileCard content={["tomato","onion"]}>
            </ProfileCard>
        </div>
        </>
    )
}