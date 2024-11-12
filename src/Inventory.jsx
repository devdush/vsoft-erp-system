import React, { useState, useEffect } from 'react';
import { staff, deleteStaff } from './Services/authService'; 
import './Inventory.css';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { blue } from '@mui/material/colors';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { Navigate } from 'react-router';

const Inventory = () => {
  const [staffList, setStaffList] = useState([]);
  const [staffCount, setStaffCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All staff');
  const [openPopup, setOpenPopup] = useState(false); // To control popup visibility
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryStatus, setNewCategoryStatus] = useState(true); // true for active, false for inactive

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const data = await staff();
        setStaffList(data.data);
        setStaffCount(data.data.length);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchStaffData();
  }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };


//   const handleFilterChange = (e) => {
//     setFilterRole(e.target.value);
//   };

//   Filter staff based on email and serial number
  const filteredStaff = staffList.filter(staffMember => {
    const matchesSearchTerm =
      staffMember.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staffMember.studentCode.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesRole = filterRole === 'All staff' || staffMember.role === filterRole; 
    return matchesSearchTerm && matchesRole;
  });

  
// Open the popup
const handleAddCategoryClick = () => {
    
  };

  // Close the popup and reset the fields
  const handleClosePopup = () => {
    setOpenPopup(false);
    setNewCategoryName('');
    setNewCategoryStatus(true);
  };

  // Add new category handler
  const handleAddCategory = () => {
    const newCategory = {
      id: staffList.length + 1, // Just a temporary ID for illustration
      studentCode: newCategoryName,
      isActive: newCategoryStatus,
    };
    setStaffList([...staffList, newCategory]);
    handleClosePopup();
  };

  return (
    
    <div className="order">
        <div className="orderhp">
          <h1>Inventory</h1>
           <p>View, search for and add new Order</p>
        </div>
     <div className="order-management">
      
        {/* Search input */}
        {/* <div className="order-search">
          <p>Quick search a Product</p>
            <button className='btn-search'>
              <SearchIcon/>
            </button>
            <input
              type="text"
              placeholder="Search by Product name / ID"
              value={searchTerm}
              onChange={handleSearch}
              className='search-input'
            />
          </div> */}


        {/* Total counts */}
      <div className="header-inventory">
        <div className="tot-req-count">
         <div className="tot-req-count-hp">
          <h3>{staffCount}</h3>
          <p>Total Requests made</p>
         </div>
         
         <div className="Icon">
         <p className='icon1'><LocalMallRoundedIcon/></p>
         </div>
         </div>

         <div className="cost-count">
         <div className="cost-count-hp">
          <h3>{staffCount}</h3>
          <p>Total cost incurred</p>
         </div>
         <div className="Icon">
         <p className='icon2'><MonetizationOnIcon /></p>
         </div>
         </div>

         <div className="pending-req-count">
         <div className="pending-req-count-hp">
          <h3>{staffCount}</h3>
          <p>Pending requests</p>
         </div>
         <div className="Icon">
         <p className='icon3'><PendingActionsIcon/></p>
         </div>
         </div>

         <div className="approved-req-count">
         <div className="approved-req-count-hp">
          <h3>{staffCount}</h3>
          <p>Approved requests</p>
         </div>
         <div className="Icon">
         <p className='icon4'><LocalMallRoundedIcon/></p>
         </div>
         </div>
        </div>


        {/* Filter dropdown */}
        {/* <div className="o-filter">
        <p>Filter Products</p>
          <select value={filterRole} onChange={handleFilterChange}>
            <option value="All staff">All Products</option>
            <option value="Manager">Manager</option>
            <option value="Cashier">Cashier</option>
            <option value="Admin">Admin</option>
          </select>
        </div> */}

        {/* make order req button */}
       <div className="order-req">
        <h3>Order Request</h3>
        <button className="btn-add-order" onClick={handleAddCategoryClick}>Make Order Request</button>
       </div>
       
       <div className="popup-box">
       <Dialog open={openPopup} onClose={handleClosePopup} classes={{ paper: 'dialog-paper' }}>
            <DialogTitle className="dialog-title">Order Request</DialogTitle>
            <DialogContent className="dialog-content">
                <label className='input-name' >
                    Short Name 
                    <input type='text' placeholder='Enter short name' className='input-field'>

                    </input>
                </label>
            </DialogContent>
        <DialogActions>
        <Button className="btn-make-order" onClick={handleAddCategory} variant="contained" color="primary">
            Make order request
        </Button>
            <Button className="btn-cancel" onClick={handleClosePopup} variant="outlined" color="secondary">
                Cancel
            </Button>
            </DialogActions>
        </Dialog>
        
       </div>

      </div>

      {/* Stocks Details Table */}
      <div className="stocks-table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Product ID</th>
              <th>Category</th>
              <th>QTY Purchased</th>
              <th>Unit Price</th> 
              <th>Total Amount</th>
              <th>In-Stock</th>
              <th>Supplier</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((staffMember, index) => (
              <tr key={index}>
                <td>{staffMember.studentCode}</td>
                
                <td>{staffMember.studentName}</td>
                <td>{staffMember.pcCode}</td>
                <td>{staffMember.centerCode}</td>
                <td>{staffMember.address}</td>
                <td>{staffMember.phoneNumber}</td>
                <td>{staffMember.phoneNumber}</td>
                <td>{staffMember.pcCode}</td>
                <td>{staffMember.pcCode}</td>
                <td>
                  Out Of Stock
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  );
};

export default Inventory;
