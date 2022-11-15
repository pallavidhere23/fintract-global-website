import styles from "../styles/Ourservices.module.css";
import Image from "next/image";

import {HiOutlineArrowLongRight} from 'react-icons/hi2';
import { Button,Stack } from '@chakra-ui/react'
import { CgArrowLongRight } from 'react-icons/cg';

const Ourservices = () => {
    return (
        <div className={styles.services}>
        <h1 className={styles.headingos}>Our Services</h1>
        <div className={styles.buttoncolum}>
        <Stack direction='column' spacing={4}>
      <Button rightIcon={<CgArrowLongRight />} 
 
  width= '300px'
  height= '55px'
  background= '#6961D038'
  borderRadius= '14px'
  >
    Bussiness
  </Button>
  <Button rightIcon={<CgArrowLongRight />} 
 
  width= '300px'
  height= '55px'
  background= '#6961D038'
  borderRadius= '14px'
  >
    Technologies
  </Button>
  <Button rightIcon={<CgArrowLongRight />} 
 
  width= '300px'
  height= '55px'
  background= '#6961D038'
  borderRadius= '14px'
  >
    Security
  </Button>
  
</Stack>
</div>


<div className={styles.decribtionboxes}>
    <div className={styles.describelayout}>
      
    <img className={styles.imgser} src = "https://fintractwebsite.s3.ap-south-1.amazonaws.com/b2b.png"></img>
    <h1 className={styles.head}>B2B</h1>
      <h3 className={styles.boxtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
      <button className={styles.viewsol}>View Solution<HiOutlineArrowLongRight/></button>
    </div>

    <div className={styles.describelayout}>
    <img className={styles.imgser} src = "https://fintractwebsite.s3.ap-south-1.amazonaws.com/banking.png"></img>
    <h1 className={styles.head}>Banking as a service</h1>
      <h3 className={styles.boxtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
      <button className={styles.viewsol}>View Solution<HiOutlineArrowLongRight/></button>
     
    </div>

    <div className={styles.describelayout}>
    <img className={styles.imgser} src = "https://fintractwebsite.s3.ap-south-1.amazonaws.com/openbanking.png"></img>
    <h1 className={styles.head}>Open Banking</h1>
      <h3 className={styles.boxtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
      <button className={styles.viewsol}>View Solution<HiOutlineArrowLongRight/></button>
      
    </div>

    <div className={styles.describelayout}>
    <img className={styles.imgser} src = "https://fintractwebsite.s3.ap-south-1.amazonaws.com/sme.png"></img>
    <h1 className={styles.head}>SME Lending</h1>
      <h3 className={styles.boxtext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h3>
      <button className={styles.viewsol}>View Solution<HiOutlineArrowLongRight/></button>
      
    </div>
    
    
    </div>
        </div>
      
    );
  };
  
  export default Ourservices;