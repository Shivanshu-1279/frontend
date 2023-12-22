import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Zocket from '../../Images/zocket.jpeg'

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '120%' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader  prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            // style={{ color: 'inherit' }}
          >
              <div className="company-logo">
           <img style={{height:"50px", width: "50px", borderRadius:'400px' }} src={Zocket}alt="Company Logo" />
         </div>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/campaign" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="music">Campaign</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/product" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="gift">Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/customer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                Customer
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>


      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
