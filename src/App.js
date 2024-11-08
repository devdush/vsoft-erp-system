import logo from "./logo.svg";
import "./App.css";
import AdminLayout from "./Layouts/admin/layout";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Scenes/admin/dashboard";
import AdminLedger from "./Scenes/admin/ledger";
import AdminStockManagement from "./Scenes/admin/stock-management";
import CreateItem from "./Scenes/admin/create-item";
import ManageItems from "./Scenes/admin/manage-items";
import CreatePurchaseOrder from "./Scenes/admin/create-purchase-order";
import ManagePurchaseOrders from "./Scenes/admin/manage-purchase-orders";
import CreateGRN from "./Scenes/admin/create-grn";
import ManageGRN from "./Scenes/admin/manage-grn";
import CreateStaff from "./Scenes/admin/create-staff";
import ManageStaff from "./Scenes/admin/manage-staff";
import Notifications from "./Scenes/admin/notifications";
import CompanyInfo from "./Scenes/admin/company-info";
import Settings from "./Scenes/admin/settings";
import Profile from "./Scenes/admin/profile";
import CreateSupplier from "./Scenes/admin/create-supplier";
import ManageSupplier from "./Scenes/admin/manage-supplier";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="ledger" element={<AdminLedger />} />
          <Route path="check-stocks" element={<AdminStockManagement />} />
          <Route path="add-item" element={<CreateItem />} />
          <Route path="item-update" element={<ManageItems />} />
          <Route
            path="create-purchase-order"
            element={<CreatePurchaseOrder />}
          />
          <Route
            path="update-purchase-order"
            element={<ManagePurchaseOrders />}
          />
          <Route path="create-grn" element={<CreateGRN />} />
          <Route path="update-grn" element={<ManageGRN />} />
          <Route path="create-staff" element={<CreateStaff />} />
          <Route path="update-staff" element={<ManageStaff />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="company-info" element={<CompanyInfo />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="create-supplier" element={<CreateSupplier />} />
          <Route path="update-supplier" element={<ManageSupplier />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
