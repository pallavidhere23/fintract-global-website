import styles from "../styles/Ourclients.module.css";
import Image from "next/image";

import { Grid, GridItem } from '@chakra-ui/react'


const Ourclients = () => {
    return (
  <div className={styles.rectclient}>
     <h3 className={styles.clienthead}>Our Clients</h3>  
     <Grid className= {styles.imggrid} templateColumns='repeat(4, 1fr)' gap={20}>
  <GridItem><Image className={styles.imgpaypal} src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/paypal.png" alt="" width="300" height="92" /></GridItem>
  <GridItem><Image src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/amazon.png"  alt="" width="300" height="92"/></GridItem>
  <GridItem><Image src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/buckingham.png" alt="" width="300" height="92" /></GridItem>
  <GridItem><Image src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/google.png"  alt="" width="300" height="92"/></GridItem>
  
</Grid>
      
    </div>
    
    
  
      
    );
  };
  
  export default Ourclients;

