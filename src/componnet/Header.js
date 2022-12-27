import  'rsuite/dist/rsuite.min.css';
import { Navbar, Nav } from 'rsuite';
import React from 'react';
import { Avatar } from 'rsuite';
import Notication from './Notication';

function Header () {
 
    return (
  <Navbar style={{ backgroundColor : '#333', height :'65px' }}>
    <Nav>
    </Nav>
    <Nav pullRight>
    
    <Nav.Menu title={
        <Avatar circle src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" />
      
    } >
          <Nav.Item>ข้อมูลส่วนตัว</Nav.Item>
          <Nav.Item>ออกจากระบบ</Nav.Item>
        </Nav.Menu>
    </Nav>
    <Nav pullRight>
   <Notication /> 
    </Nav>
  </Navbar>
);
    }

export default Header;