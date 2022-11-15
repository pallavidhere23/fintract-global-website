import styles from "../styles/Best.module.css";
import Image from "next/image";


const Best = () => {
    return (
  <div className={styles.best}>
        <h1 className={styles.title}>Why are We the best</h1>
        <div className={styles.headbox}>
        <div className={styles.boxbd}>
         <Image className={styles.bestimg} src = "https://fintractwebsite.s3.ap-south-1.amazonaws.com/clock.png" alt="" width="157" height="146"/>
         <h1 className={styles.headbd}>On Time</h1>
         <h3 className={styles.boxtextbd}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</h3>
         </div>
     
         <div className={styles.boxbd}>
         <Image className={styles.bestimg} src = "https://fintractwebsite.s3.ap-south-1.amazonaws.com/security.png" alt="" width="157" height="146"/>
         <h1 className={styles.headbd}>Security</h1>
         <h3 className={styles.boxtextbd}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</h3>
         </div>
         <div className={styles.boxbd}>
         <Image className={styles.bestimg} src = "https://fintractwebsite.s3.ap-south-1.amazonaws.com/time.png" alt="" width="157" height="146"/>
         <h1 className={styles.headbd}>Fast work Turnaround</h1>
         <h3 className={styles.boxtextbd}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</h3>
         </div>
         </div>
    
 </div>
      
    );
  };
  
  export default Best;