import styles from "../styles/Signup.module.css";
import Image from "next/image";
import { Input,Button} from '@chakra-ui/react'

const Signup = () => {
    return (
        <div className={styles.oirect}>
        <h3 className={styles.signup}>Sign Up</h3>
        <h3 className={styles.updateoi}>For Openinvest updates</h3>
        
        <Input className={styles.fillbox} placeholder=''
          borderColor ='#000950'
          borderRadius='20'
          width='410' />
       
       
        <Button className={styles.subscribenow}
backgroundColor='#6861D0'
borderRadius ='21'
color='white'
width='186'
height='46'>Subscribe Now</Button>
        <h3 className={styles.greating}>By submitting this form, you are agreeing to receive marketing communications from G2.</h3>
      </div> 
      
    );
  };
  
  export default Signup;