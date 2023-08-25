import Image from "next/image"
import styles from "./profileCard.module.scss"
import TagBox from "./TagBox"
export default function ProfileCard({content}){
    return(<>

<section className={styles.leftSection}>
<div className={styles.card}>


<Image
            src="/bike.png"
            height={400}
            width={400}
            alt="bike"
        />
</div>
<div className={styles.tags}>
    <TagBox content={content}></TagBox>
    
    
</div>
</section>
   
    </>)
}