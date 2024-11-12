import React, { useState, useEffect } from 'react';
import { staff } from './Services/authService'; 
import './StaffManagement.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [staffCount, setStaffCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All staff');
  const [currentPage, setCurrentPage] = useState(1); 
  const recordsPerPage = 20;
  const [openModal, setOpenModal] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

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
    setCurrentPage(1); 
  };

  const handleFilterChange = (e) => {
    setFilterRole(e.target.value);
    setCurrentPage(1); 
  };

  const handleEditClick = (staffMember) => {
    setSelectedStaff(staffMember);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedStaff(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedStaff({ ...selectedStaff, [name]: value });
  };

  const handleSave = () => {
    // Add your save logic here (API call to update staff)
    console.log('Updated Staff:', selectedStaff);
    setOpenModal(false);
  };

  const filteredStaff = staffList.filter(staffMember => {
    const matchesSearchTerm =
      staffMember.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staffMember.studentCode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === 'All staff' || staffMember.role === filterRole; 
    return matchesSearchTerm && matchesRole;
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredStaff.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(filteredStaff.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="staff">
      <div className="staffhp">
      <h1 className='head'>All Staff</h1>
      <p>View, search for and add new staff</p>
      </div>
      <div className="staff-management">
        <div className="staff-head">
          <div className="staff-search">
          <p>Quick search a staff</p>
            <button className='btn-search'>
              <SearchIcon/>
            </button>
            <input
              type="text"
              placeholder="Search by Email or S/N"
              value={searchTerm}
              onChange={handleSearch}
              className='search-input'
            />
          </div>

          <div className="staff-count">
            <h3>{staffCount}</h3>
            <p>Total number of staff</p>
          </div>

          <div className="staff-filter">
          <p>Filter staff</p>
            <select value={filterRole} onChange={handleFilterChange}>
              <option value="All staff">All staff</option>
              <option value="Manager">Manager</option>
              <option value="Cashier">Cashier</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button className="btn-add-staff">Add New Staff</button>
        </div>
      </div>

      <div className="staff-table">
        <table>
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Staff Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Actions</th> 
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((staffMember, index) => (
              <tr key={index}>
                <td>{staffMember.studentCode}</td>
                <td>{staffMember.studentName}</td>
                <td>{staffMember.email}</td>
                <td>{staffMember.centerCode}</td>
                <td>{staffMember.phoneNumber}</td>
                <td>
                  <div className="btn-add-delete">
                    <button onClick={() => handleEditClick(staffMember)} className="btn-edit"><EditIcon/></button>
                    <button className="btn-delete"><DeleteIcon/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal open={openModal} onClose={handleModalClose}>
        <div className="modal-content">
          <h2>Edit Staff Member</h2>
          <TextField
            label="Staff Name"
            name="studentName"
            value={selectedStaff?.studentName || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={selectedStaff?.email || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="centerCode"
            value={selectedStaff?.centerCode || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact Number"
            name="phoneNumber"
            value={selectedStaff?.phoneNumber || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default StaffManagement;
