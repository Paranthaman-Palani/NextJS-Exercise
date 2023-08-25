import styles from "./tagBox.module.scss"
export default function TagBox({content}){
    return(
        <>
        {content?.map((tags)=>{
            return(
            <div className={styles.tagBox}>
                {tags}
            </div>)
        })}
        
            
        </>
    )
}