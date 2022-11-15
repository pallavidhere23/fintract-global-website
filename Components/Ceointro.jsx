import styles from "../styles/Ceointro.module.css";
import Image from "next/image";


const Ceointro = () => {
    return (

    <div className={styles.intro}>
    <h3 className={styles.ceointro}>“Over the years, I have built lasting relationships with my clients and team , whose professional success I believe to be closely linked with our long-term progress.”</h3>
    <Image className={styles.ceoimg} src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/ceo.png" alt="" width="185" height="185" />
    <h3 className={styles.name}>Debasis Chakroborty</h3>    
    <h3 className={styles.describe}>CEO FinTract Global</h3>
    
  </div>
      
    );
  };
  
  export default Ceointro;





