import * as React from 'react';
import { LayoutProps, Menu, Notifications, Modals, Languages, ExtensionSlot } from 'piral';
import { MenuToggle } from './MenuToggle';
import { Link } from 'react-router-dom';
//import { LogoImage } from '../images/HealthLogo1.jpg';


export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="app-container">
    <div className="app-menu">
      <div className="app-menu-content">
        <Menu type="general" />
        <Menu type="admin" />
      </div>
    </div>
    <Notifications />
    <Modals />
    <div className="app-header">
      <div className="app-title">
          <MenuToggle />          
          <Link className="navbar-brand" to="/">              
              Good HealthCare              
            </Link>
        </div>      
      <Menu type="header" />
      <Languages /> 
      <ExtensionSlot name="footer-test"/>     
    </div>
    <div className="app-content">{children}    
    </div>
    <div className="app-footer">
      <Menu type="footer" />      
    </div>
  </div>
);
