import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import Content from './Content';
import ContentX from './Content copy'; // Replace with your actual component for Staff
import ContentY from './Content copy 2'; // Replace with your actual component for Supplier, Inventory, etc.

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
    icon: <LocalShippingIcon />, // Change to appropriate icon
    href: '/supplier',
  },
  {
    segment: 'inventory',
    title: 'Inventory',
    icon: <InventoryIcon />, // Change to appropriate icon
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
    icon: <PeopleIcon />, // Change to appropriate icon
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
        href: '/reports/traffic', // Add traffic route if needed
      },
    ],
  },
  {
    segment: 'ledger',
    title: 'Ledger',
    icon: <ReceiptIcon />, // Change to appropriate icon
    href: '/ledger',
  },
  {
    segment: 'company-info',
    title: 'Company Info',
    icon: <BusinessIcon />, // Change to appropriate icon
    href: '/company-info',
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <SettingsIcon />, // Change to appropriate icon
    href: '/settings',
  },
  {
    segment: 'notifications',
    title: 'Notifications',
    icon: <NotificationsIcon />, // Change to appropriate icon
    href: '/notifications',
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <ExitToAppIcon />, // Change to appropriate icon
    href: '/logout',
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
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
      {pathname === '/staff' && <ContentX />} 
      {pathname === '/supplier' && <ContentY />} 
      {pathname === '/inventory' && <ContentY />} 
      {pathname === '/order' && <ContentY />}
      {pathname === '/reports/sales' && <ContentY />} 
      {pathname === '/reports/traffic' && <ContentY />} 
      {pathname === '/ledger' && <ContentY />} 
      {pathname === '/company-info' && <ContentY />} 
      {pathname === '/settings' && <ContentY />} 
      {pathname === '/notifications' && <ContentY />} 
      {pathname === '/logout' && <ContentY />}
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
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        title:'ERP System',
        logo:<img src="" />
      }}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export default DashboardLayoutBasic;
