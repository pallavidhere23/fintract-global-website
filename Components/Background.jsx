import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import styles from "../styles/Background.module.css";




 function Background() {
  return (
    <>
      <Swiper className ={styles.swiper}
        cssMode={true}
        direction={"vertical"}
        navigation={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[Pagination, Navigation]}
       
     >
        <SwiperSlide className={styles.swiperslide}>
        <div className={styles.maincontainer}>
       <div className={styles.companyname}>Fintract Global</div>
       <div className={styles.companydetails}>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the  services we provide. </div>
 <div className={styles.buttonstyle}> 
   <Stack direction='row' spacing={4}>
<Button
rightIcon={<CgArrowLongRight />}
  height='46px'
  width ='186px'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='2px'
  background='#8F3BF2DB'
  borderRadius='100px'
  fontSize='20px'
  fontWeight='400'
  fontFamily ='Calibri'
  borderColor='#8F3BF2'
  textColor ='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}>
    Get Started
  </Button>
  
  
    <Menu>
               <MenuButton 
               height='46px'
  width ='186px'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='2px'
  background='transparent'
  borderRadius='100px'
  fontSize='20px'
  fontWeight='400'
  fontFamily ='Calibri'
  borderColor='white'
  textColor ='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}>Know More <ChevronDownIcon/></MenuButton>
                  <Portal>
                  <MenuList 
                   zIndex={999}
                   >
                     <MenuItem>Careers</MenuItem>
                     <MenuItem>Legal Consultancy</MenuItem>
                     <MenuItem>Articles</MenuItem>
                     <MenuItem>FintraLegal</MenuItem>
                  </MenuList>
                  </Portal>
                </Menu>
  
 
</Stack>
</div>    
       </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
        <div className={styles.maincontainer}>
       <div className={styles.companyname}>Fintract Global</div>
       <div className={styles.companydetails}>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the  services we provide. </div>
       <div className={styles.buttonstyle}> 
   <Stack direction='row' spacing={4}>
<Button
rightIcon={<CgArrowLongRight />}
  height='46px'
  width ='186px'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='2px'
  background='#8F3BF2DB'
  borderRadius='100px'
  fontSize='20px'
  fontWeight='400'
  fontFamily ='Calibri'
  borderColor='#8F3BF2'
  textColor ='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}>
    Get Started
  </Button>
 
  
    <Menu>
               <MenuButton
               height='46px'
               width ='186px'
               transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
               border='2px'
               background='transparent'
               borderRadius='100px'
               fontSize='20px'
               fontWeight='400'
               fontFamily ='Calibri'
               borderColor='white'
               textColor ='white'
               _hover={{ bg: '#ebedf0' }}
               _active={{
                 bg: '#dddfe2',
                 transform: 'scale(0.98)',
                 borderColor: '#bec3c9',
               }}
               _focus={{
                 boxShadow:
                   '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
               }}>Know More <ChevronDownIcon/></MenuButton>
                  <Portal>
                  <MenuList 
                   zIndex={999}
                   >
                     <MenuItem>Careers</MenuItem>
                     <MenuItem>Legal Consultancy</MenuItem>
                     <MenuItem>Articles</MenuItem>
                     <MenuItem>FintraLegal</MenuItem>
                  </MenuList>
                  </Portal>
                </Menu>
 
</Stack>
</div>   
       </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
        <div className={styles.maincontainer}>
       <div className={styles.companyname}>Fintract Global</div>
       <div className={styles.companydetails}>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the  services we provide. </div>
       <div className={styles.buttonstyle}> 
   <Stack direction='row' spacing={4}>
<Button
rightIcon={<CgArrowLongRight />}
  height='46px'
  width ='186px'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='2px'
  background='#8F3BF2DB'
  borderRadius='100px'
  fontSize='20px'
  fontWeight='400'
  fontFamily ='Calibri'
  borderColor='#8F3BF2'
  textColor ='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}>
    Get Started
  </Button>
  
    <Menu>
               <MenuButton height='46px'
  width ='186px'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='2px'
  background='transparent'
  borderRadius='100px'
  fontSize='20px'
  fontWeight='400'
  fontFamily ='Calibri'
  borderColor='white'
  textColor ='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}>Know More <ChevronDownIcon/></MenuButton>
                  <Portal>
                  <MenuList 
                   zIndex={999}
                   >
                     <MenuItem>Careers</MenuItem>
                     <MenuItem>Legal Consultancy</MenuItem>
                     <MenuItem>Articles</MenuItem>
                     <MenuItem>FintraLegal</MenuItem>
                  </MenuList>
                  </Portal>
                </Menu>
 
</Stack>
</div>    
       </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img
            src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/mainpagebg.png"
            alt=""
          />
        </SwiperSlide >
        <SwiperSlide className={styles.swiperslide}>
        <div className={styles.maincontainer}>
       <div className={styles.companyname}>Fintract Global</div>
       <div className={styles.companydetails}>Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which are in our interests and enable us to enhance the  services we provide. </div>
       <div className={styles.buttonstyle}> 
   <Stack direction='row' spacing={4}>
<Button
rightIcon={<CgArrowLongRight />}
  height='46px'
  width ='186px'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='2px'
  background='#8F3BF2DB'
  borderRadius='100px'
  fontSize='20px'
  fontWeight='400'
  fontFamily ='Calibri'
  borderColor='#8F3BF2'
  textColor ='white'
  _hover={{ bg: '#ebedf0' }}
  _active={{
    bg: '#dddfe2',
    transform: 'scale(0.98)',
    borderColor: '#bec3c9',
  }}
  _focus={{
    boxShadow:
      '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
  }}>
    Get Started
  </Button>
  
   <Menu>
               <MenuButton
               height='46px'
               width ='186px'
               transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
               border='2px'
               background='transparent'
               borderRadius='100px'
               fontSize='20px'
               fontWeight='400'
               fontFamily ='Calibri'
               borderColor='white'
               textColor ='white'
               _hover={{ bg: '#ebedf0' }}
               _active={{
                 bg: '#dddfe2',
                 transform: 'scale(0.98)',
                 borderColor: '#bec3c9',
               }}
               _focus={{
                 boxShadow:
                   '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
               }}>Know More <ChevronDownIcon/></MenuButton>
                  <Portal>
                  <MenuList 
                   zIndex={999}
                   >
                     <MenuItem>Careers</MenuItem>
                     <MenuItem>Legal Consultancy</MenuItem>
                     <MenuItem>Articles</MenuItem>
                     <MenuItem>FintraLegal</MenuItem>
                  </MenuList>
                  </Portal>
                </Menu>
  
</Stack>
</div>    
       </div>
        </SwiperSlide>
      </Swiper>
    
    <div className={styles.aboutus}>
    <h1 className={styles.aboutushead}>About Us</h1>
    <h3 className={styles.aboutusdesc}>Fintract Global takes your privacy very seriously. We may process your personal information far carefully considered and specific purposes which are in our interests and enable us to enhance the services we provide, but which we believe also benefit our customers.</h3>
    </div>
    </>
  );
}

export default Background;