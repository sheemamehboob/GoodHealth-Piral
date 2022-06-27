import * as React from 'react';
import { ComponentsState, ErrorComponentsState, Menu, Notifications, SwitchErrorInfo, MenuItemProps, useTranslate } from 'piral';
import { Link } from 'react-router-dom';
import { Layout } from '../src/components/Layout';
import { LanguagePicker } from '../src/components/LanguagePicker';
import { getTileClass } from './utils';
const MenuItem: React.FC<MenuItemProps> = ({ children }) => <li className="nav-item">{children}</li>;

const GoodHealthDashboardImage = require('./images/GoodHealth.jpg');
const LogoImage = require('./images/HealthLogo.png');

const defaultTiles = (
  <>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://piral.io/">Piral</a>
        <br />
        for next generation portals
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://www.typescriptlang.org/">TypeScript</a>
        <br />
        for writing scalable web apps
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://reactjs.org/">React</a>
        <br />
        for building components
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="http://getbootstrap.com/">Bootstrap</a>
        <br />
        for layout and styling
      </div>
    </div>
    <div className="tile rows-2 cols-2">
      <div className="teaser">
        <a href="https://sass-lang.com">Sass</a>
        <br />
        for crafting custom styles
      </div>
    </div>
  </>
);

const defaultMenuItems = (
  <>
    <MenuItem type="general" meta={{}}>
      <Link className="nav-link text-dark" to="/not-found">
        Not Found
      </Link>
    </MenuItem>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};


export const layout: Partial<ComponentsState> = {  
  LanguagesPicker: LanguagePicker,
  ErrorInfo: props => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),   
  DashboardContainer: ({ children }) => (
    <div>      
      <img style={{ width: 500 }} src={GoodHealthDashboardImage}>
      
      </img>
      <div className="tiles">
        {defaultTiles}
        {children}
      </div>
    </div>
  ),
  /*DashboardContainer: ({ children }) => {
    const translate = useTranslate();
    return (
      <div className="pi-content">
        <h1>{translate('sample')}</h1>
        <div className="pi-dashboard">{children}</div>
      </div>
    );
  },*/
  DashboardTile: ({ columns, rows, children }) => <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>,
  /*Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type="general" />
      <div className="container">{children}</div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3">
          <div className="container">            
            <Link className="navbar-brand" to="/">
              <img style={{ width: 50 }} src={LogoImage} />
              Good HealthCare              
            </Link>           
            <button
              aria-label="Toggle navigation"
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className="navbar-toggler mr-2">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${collapsed ? '' : 'show'}`}
              aria-expanded={!collapsed}>
              <ul className="navbar-nav flex-grow">
                {children}
                {defaultMenuItems}
              </ul>
            </div>
          </div>
        </nav>
      </header>       
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => <div className="notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && <div className="notification-toast-title">{options.title}</div>}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),*/
  Layout,
  MenuContainer: ({ children }) => <div className="pi-menu">{children}</div>,
  MenuItem: ({ children }) => <div className="pi-item">{children}</div>,
  NotificationsHost: ({ children }) => <div className="pi-notifications">{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`pi-item ${options.type}`}>
      <div className="pi-details">
        {options.title && <div className="pi-title">{options.title}</div>}
        <div className="pi-description">{children}</div>
      </div>
      <div className="pi-close" onClick={onClose} />
    </div>
  ),
  ModalsHost: ({ children, open }) => {
    React.useEffect(() => {
      const body = document.body;

      if (open) {
        body.style.top = `-${window.scrollY}px`;
        body.classList.add('pi-modal-open');
      } else {
        const offset = -parseInt(body.style.top || '0', 10);
        body.classList.remove('pi-modal-open');
        body.style.top = '';
        window.scrollTo(0, offset);
      }
    }, [open]);
    return <div className="pi-modal">{children}</div>;
  },
  ModalsDialog: ({ children }) => <div className="pi-modal-dialog">{children}</div>,
};
