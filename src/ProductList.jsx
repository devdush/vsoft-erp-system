import React, { useState, useEffect } from 'react';
import { staff, deleteStaff } from './Services/authService'; // Ensure you import the deleteStaff function
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './ProductList.css';


const ProductList = () => {
  const [staffList, setStaffList] = useState([]);
  const [staffCount, setStaffCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All staff');

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

  // Filter staff based on email and serial number
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
        {/* Search input */}
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


        {/* Total staff count */}
        <div className="staff-count">
          <h3>{staffCount}</h3>
          <p>Total number of Products</p>
        </div>

        {/* Filter dropdown */}
        <div className="staff-filter">
        <p>Filter Products</p>
          <select value={filterRole} onChange={handleFilterChange}>
            <option value="All staff">All Products</option>
            <option value="Manager">Manager</option>
            <option value="Cashier">Cashier</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {/* Add new staff button */}
       
        <button className="btn-add-staff">Add New Product</button>
        
          
        
      </div>
      </div>

      {/* Staff Details Table */}
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
                  <Link to={`/EditStaff/${staffMember.id}`}>
                    <button className="btn-edit">Edit</button>
                  </Link>
                  <button 
                    className="btn-delete" >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  );
};

export default ProductList;
