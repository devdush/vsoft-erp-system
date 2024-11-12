import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';  // Import createTheme and ThemeProvider
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Content from './Content';
import ContentY from './Content copy 2'; 

import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UserDropdown from './UserDropdown';
import AddStaffForm from '../AddStaffForm';
import StaffManagement from '../StaffManagement';
import AddProduct from '../AddProduct';
import NewSupplier from '../NewSupplier';
import ProductList from '../ProductList';
import Inventory from '../Inventory';
import OrderRequest from './OrderRequest';
import AddSupplier from '../AddNewSupplier';
// Define the navigation
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    href: '/dashboard',
  },
  {
    segment: 'supplier',
    title: 'Supplier',
    icon: <LocalShippingIcon />,
    href: '/supplier',
  },
  {
    segment: 'inventory',
    title: 'Inventory',
    icon: <InventoryIcon />,
    href: '/inventory',
  },
  {
    segment: 'order',
    title: 'Order',
    icon: <ShoppingCartIcon />,
    href: '/order',
  },
  {
    segment: 'staff',
    title: 'Staff',
    icon: <PeopleIcon />,
    href: '/staff',
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <AssignmentIcon />,
        href: '/reports/sales',
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
        href: '/reports/traffic',
      },
    ],
  },
  {
    segment: 'ledger',
    title: 'Ledger',
    icon: <ReceiptIcon />,
    href: '/ledger',
  },
  {
    segment: 'company-info',
    title: 'Company Info',
    icon: <BusinessIcon />,
    href: '/company-info',
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <SettingsIcon />,
    href: '/settings',
  },
  {
    segment: 'notifications',
    title: 'Notifications',
    icon: <NotificationsIcon />,
    href: '/notifications',
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <ExitToAppIcon />,
    href: '/logout',
  },
];

// Create a theme
const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {pathname === '/dashboard' && <Content />}
      {pathname === '/staff' && < StaffManagement/>} 
      {pathname === '/supplier' && <NewSupplier />} 
      {pathname === '/inventory' && <Inventory />} 
      {pathname === '/order' && < OrderRequest/>}
      {pathname === '/reports/sales' && <ContentY />} 
      {pathname === '/reports/traffic' && <ContentY />} 
      {pathname === '/ledger' && <ProductList />} 
      {pathname === '/company-info' && <AddProduct />} 
      {pathname === '/settings' && <ContentY />} 
      {pathname === '/notifications' && <ContentY />} 
      {pathname === '/logout' && <ContentY />}

      <UserDropdown/>

    </Box>
  );
}

function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    
    <ThemeProvider theme={demoTheme}> {/* Wrap with ThemeProvider */}
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        branding={{
          title: 'ERP System',
          logo: <img src=""/>,
        }}
      >
        <DashboardLayout>
          <DemoPageContent pathname={pathname} />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
    
  );
}

export default DashboardLayoutBasic;
