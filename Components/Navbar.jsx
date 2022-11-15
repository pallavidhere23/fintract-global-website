import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'

import { ChevronDownIcon, SearchIcon} from '@chakra-ui/icons'
import { AiOutlineLogin } from 'react-icons/ai';
import { IconButton } from '@chakra-ui/react'

const Navbar = () => {
    return (
      <div className={styles.container}>
         <div className={styles.item}>
          <div className={styles.logo}>
            <Image src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/fintractlogo.png" alt="" width="65" height="65" />
          </div>
          </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Contact Us</li>
            <li className={styles.listItem}>About Us</li>
            <li className={styles.listItem}>
            <Menu>
               <MenuButton>Our Products <ChevronDownIcon/></MenuButton>
                  <Portal>
                  <MenuList 
                   zIndex={99999999}
                   >
                     <MenuItem>Careers</MenuItem>
                     <MenuItem>Legal Consultancy</MenuItem>
                     <MenuItem>Articles</MenuItem>
                     <MenuItem>FintraLegal</MenuItem>
                  </MenuList>
                  </Portal>
                </Menu>
              </li>

            <li className={styles.listItem}>
            <Menu>
               <MenuButton>More <ChevronDownIcon/></MenuButton>
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
            
            </li>
            
          </ul>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
          <li className={styles.loginbtn}>
          <Button 
  rightIcon={< AiOutlineLogin/>}  
  height='60px'
  width ='173px'
  transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
  border='2px'
  background='transparent'
  borderRadius='100px'
  fontSize='24px'
  fontWeight='400'
  fontFamily ='Calibri'
  borderColor='#8F3BF2'
  textColor ='#0D0D0D'
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
    Login
  </Button>
         
          </li>
          <li className={styles.searchbtn}>
            <IconButton
               variant='outline'
               color='#0D0D0D'
               borderRadius='100px'
               height='60px'
               width ='60px'
               size='lg'
               borderColor='#8F3BF2'
               border='2px'
               aria-label='Search database' 
               transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
               _hover={{ bg: '#ebedf0' }}
               _active={{
                 bg: '#dddfe2',
                 transform: 'scale(0.98)',
                 borderColor: '#bec3c9',
               }}
               _focus={{
                 boxShadow:
                   '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
               }}
             icon={<SearchIcon />} />
          </li>
         </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;