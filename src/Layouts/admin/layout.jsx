import * as React from "react";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet } from "react-router-dom";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import DevicesIcon from "@mui/icons-material/Devices";
import CategoryIcon from "@mui/icons-material/Category";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import GroupIcon from "@mui/icons-material/Group";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FeedIcon from "@mui/icons-material/Feed";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const NAVIGATION = [
  {
    segment: "admin/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "admin/ledger",
    title: "Ledger",
    icon: <AccountBalanceIcon />,
  },
  //   {
  //     kind: "divider",
  //   },
  //   {
  //     kind: "header",
  //     title: "Analytics",
  //   },
  {
    segment: "admin",
    title: "Inventory",
    icon: <BrandingWatermarkIcon />,
    children: [
      {
        segment: "check-stocks",
        title: "Stocks Management",
        icon: <Inventory2Icon />,
      },
      {
        segment: "add-item",
        title: "Create Item",
        icon: <AddIcon />,
      },
      {
        segment: "item-update",
        title: "Manage Items",
        icon: <CreateIcon />,
      },
    ],
  },
  {
    segment: "admin",
    title: "Suppliers",
    icon: <LocalShippingIcon />,
    children: [
      {
        segment: "create-supplier",
        title: "Create Supplier",
        icon: <AddIcon />,
      },
      {
        segment: "update-supplier",
        title: "Manage Suppliers",
        icon: <CreateIcon />,
      },
    ],
  },
  {
    segment: "admin",
    title: "Purchase Orders",
    icon: <ShoppingBasketIcon />,
    children: [
      {
        segment: "create-purchase-order",
        title: "Create Purchase Order",
        icon: <AddIcon />,
      },
      {
        segment: "update-purchase-orders",
        title: "Manage Purchase Orders",
        icon: <CreateIcon />,
      },
    ],
  },
  {
    segment: "admin",
    title: "GRN",
    icon: <AccountTreeIcon />,
    children: [
      {
        segment: "create-grn",
        title: "Create GRN",
        icon: <AddIcon />,
      },
      {
        segment: "update-grn",
        title: "Manage GRN",
        icon: <CreateIcon />,
      },
    ],
  },
  {
    segment: "admin",
    title: "Reports",
    icon: <CategoryIcon />,
    children: [
      {
        segment: "category-create",
        title: "Create",
        icon: <AddIcon />,
      },
      {
        segment: "category-update",
        title: "Manage",
        icon: <CreateIcon />,
      },
    ],
  },
  {
    segment: "admin",
    title: "Staff",
    icon: <GroupIcon />,
    children: [
      {
        segment: "create-staff",
        title: "Create Staff",
        icon: <AddIcon />,
      },
      {
        segment: "update-staff",
        title: "Manage Staff",
        icon: <CreateIcon />,
      },
    ],
  },
  {
    segment: "admin/notifications",
    title: "Notifications",
    icon: <NotificationsIcon />,
  },
  {
    segment: "admin/company-info",
    title: "Company Info",
    icon: <FeedIcon />,
  },
  {
    segment: "admin/settings",
    title: "Settings",
    icon: <SettingsIcon />,
  },
  {
    segment: "admin/profile",
    title: "Profile",
    icon: <PersonIcon />,
  },
  {
    segment: "admin/orders",
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
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

const AdminLayout = () => {
  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={demoTheme}
      branding={{
        logo: "",
        title: "ERP SYSTEM",
      }}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
};

export default AdminLayout;
