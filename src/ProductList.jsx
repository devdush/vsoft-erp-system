import React, { useState, useEffect } from 'react';
import { staff, deleteStaff } from './Services/authService'; // Ensure you import the deleteStaff function
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './ProductList.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const ProductList = () => {
  const [staffList, setStaffList] = useState([]);
  const [staffCount, setStaffCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All staff');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterRole(e.target.value);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true); // Open modal
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const filteredStaff = staffList.filter(staffMember => {
    const matchesSearchTerm =
      staffMember.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staffMember.studentCode.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesRole = filterRole === 'All staff' || staffMember.role === filterRole; 
    return matchesSearchTerm && matchesRole;
  });

  return (
    <div className="staff">
      <div className="staffhp">
        <h1>All Products</h1>
        <p>View, search for and add new Product</p>
      </div>
      <div className="staff-management">
        <div className="staff-header">
          <div className="staff-search">
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
          </div>

          <div className="staff-count">
            <h3>{staffCount}</h3>
            <p>Total number of Products</p>
          </div>

          <div className="staff-filter">
            <p>Filter Products</p>
            <select value={filterRole} onChange={handleFilterChange}>
              <option value="All staff">All Products</option>
              <option value="Manager">Manager</option>
              <option value="Cashier">Cashier</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button className="btn-add-staff">Add New Product</button>
        </div>
      </div>

      <div className="staff-table">
        <table>
          <thead>
            <tr>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Supplier Name</th>
              <th>Quantity</th>
              <th>Price Per Unit</th>
              <th>Date</th>
              <th>Expire Date</th> 
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((staffMember, index) => (
              <tr key={index}>
                <td>{staffMember.studentCode}</td>
                <td>{staffMember.studentName}</td>
                <td>{staffMember.email}</td>
                <td>{staffMember.centerCode}</td>
                <td>{staffMember.phoneNumber}</td>
                <td>{staffMember.phoneNumber}</td>
                <td>{staffMember.phoneNumber}</td>
                <td>
                  <button onClick={() => handleEditClick(staffMember)} className="btn-edit">
                    <EditIcon/>
                  </button>
                  <button className="btn-delete">
                    <DeleteIcon/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {selectedProduct && (
        <Modal open={isEditModalOpen} onClose={handleModalClose}>
          <Box className="modal-box">
            <h2>Edit Product</h2>
            <form>
              <label>
                Item Code:
                <input
                  type="text"
                  name="studentCode"
                  value={selectedProduct.studentCode}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Item Name:
                <input
                  type="text"
                  name="studentName"
                  value={selectedProduct.studentName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Supplier Name:
                <input
                  type="text"
                  name="email"
                  value={selectedProduct.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Quantity:
                <input
                  type="text"
                  name="centerCode"
                  value={selectedProduct.centerCode}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Price Per Unit:
                <input
                  type="text"
                  name="phoneNumber"
                  value={selectedProduct.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              {/* Add more fields as needed */}
              <button type="button" onClick={handleModalClose}>Save</button>
            </form>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
