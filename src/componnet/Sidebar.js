import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link} from 'react-router-dom';
import '../App.css';
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', marginTop : '-5%' }}>
        <div className="Header"></div>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
           ร้านธรรมโอสถ
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
                <Link  to="/">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
              </Link>
           
              <CDBSidebarMenuItem >จัดการสมาชิก</CDBSidebarMenuItem>
                <Link  to="/owner" >
              <CDBSidebarMenuItem icon="user">เจ้าของกิจการ</CDBSidebarMenuItem>
            </Link>
            <Link to="/supplier" >
              <CDBSidebarMenuItem icon="user">ผู้ผลิตสินค้า</CDBSidebarMenuItem>
            </Link>
            <Link to="/staff" >
              <CDBSidebarMenuItem icon="user">เจ้าหน้าที่</CDBSidebarMenuItem>
            </Link>
            <Link  to="/user" >
              <CDBSidebarMenuItem icon="user">สมาชิก</CDBSidebarMenuItem>
            </Link>

            <CDBSidebarMenuItem >คลังสินค้า</CDBSidebarMenuItem>
            <Link  to="/product" >
              <CDBSidebarMenuItem icon="shopping-bag">ข้อมูลสินค้า</CDBSidebarMenuItem>
            </Link>
            <Link  to="/producttype" >
              <CDBSidebarMenuItem icon="shopping-bag">ประเภทสินค้า</CDBSidebarMenuItem>
            </Link>
            <Link  to="/prescription" >
              <CDBSidebarMenuItem icon="shopping-bag">รายการสั่งยา</CDBSidebarMenuItem>
            </Link>

           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;