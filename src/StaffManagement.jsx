// import React, { useState, useEffect } from 'react';
// import { staff, deleteStaff } from './Services/authService'; // Ensure you import the deleteStaff function
// import './StaffManagement.css';
// import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';

// const StaffManagement = () => {
//   const [staffList, setStaffList] = useState([]);
//   const [staffCount, setStaffCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterRole, setFilterRole] = useState('All staff');

//   useEffect(() => {
//     const fetchStaffData = async () => {
//       try {
//         const data = await staff();
//         setStaffList(data.data);
//         setStaffCount(data.data.length);
//       } catch (error) {
//         console.error('Error fetching staff data:', error);
//       }
//     };

//     fetchStaffData();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };


//   const handleFilterChange = (e) => {
//     setFilterRole(e.target.value);
//   };

//   // Filter staff based on email and serial number
//   const filteredStaff = staffList.filter(staffMember => {
//     const matchesSearchTerm =
//       staffMember.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       staffMember.studentCode.toLowerCase().includes(searchTerm.toLowerCase());
      
//     const matchesRole = filterRole === 'All staff' || staffMember.role === filterRole; 
//     return matchesSearchTerm && matchesRole;
//   });


//   return (
    
//     <div className="staff">
//     <div className="staff-management">
//       <div className="staff-header">
//         {/* Search input */}
//         <div className="staff-search">
//         <button className='btn-search'>
//             <SearchIcon/>
//           </button>
//           <input
//             type="text"
//             placeholder="Search by Email or S/N"
//             value={searchTerm}
//             onChange={handleSearch}
//             className='search-input'
//           />
          
//         </div>

//         {/* Total staff count */}
//         <div className="staff-count">
//           <h3>{staffCount}</h3>
//           <p>Total</p>
//         </div>

//         {/* Filter dropdown */}
//         <div className="staff-filter">
//           <select value={filterRole} onChange={handleFilterChange}>
//             <option value="All staff">All staff</option>
//             <option value="Manager">Manager</option>
//             <option value="Cashier">Cashier</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>

//         {/* Add new staff button */}
       
//         <button className="btn-add-staff">Add New Staff</button>
        
          
        
//       </div>
//       </div>

//       {/* Staff Details Table */}
//       <div className="staff-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Staff ID</th>
//               <th>Staff Name</th>
//               <th>Email</th>
//               <th>Address</th>
//               <th>Contact Number</th>
//               <th>Actions</th> 
//             </tr>
//           </thead>
//           <tbody>
//             {filteredStaff.map((staffMember, index) => (
//               <tr key={index}>
//                 <td>{staffMember.studentCode}</td>
//                 <td>{staffMember.studentName}</td>
//                 <td>{staffMember.email}</td>
//                 <td>{staffMember.centerCode}</td>
//                 <td>{staffMember.phoneNumber}</td>
//                 <td>
//                   <Link to={`/EditStaff/${staffMember.id}`}>
//                     <button className="btn-edit">Edit</button>
//                   </Link>
//                   <button 
//                     className="btn-delete" >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//   </div>
//   );
// };

// export default StaffManagement;
import React, { useState, useEffect } from 'react';
import { staff } from './Services/authService'; // Assuming deleteStaff is not used here
import './StaffManagement.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const StaffManagement = () => {
  const [staffList, setStaffList] = useState([]);
  const [staffCount, setStaffCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All staff');
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const recordsPerPage = 20; // Number of records per page

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
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleFilterChange = (e) => {
    setFilterRole(e.target.value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Filter staff based on email, serial number, and role
  const filteredStaff = staffList.filter(staffMember => {
    const matchesSearchTerm =
      staffMember.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staffMember.studentCode.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === 'All staff' || staffMember.role === filterRole; 
    return matchesSearchTerm && matchesRole;
  });

  // Pagination logic: Calculate the records to display on the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredStaff.slice(indexOfFirstRecord, indexOfLastRecord);

  // Calculate total pages
  const totalPages = Math.ceil(filteredStaff.length / recordsPerPage);

  // Navigate to a specific page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="staff">
      <div className="staffhp">
      <h1>All Staff</h1>
      <p>View, search for and add new staff</p>
      </div>
      <div className="staff-management">
        <div className="staff-header">
          {/* Search input */}
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

          {/* Total staff count */}
          <div className="staff-count">
            <h3>{staffCount}</h3>
            <p>Total number of staff</p>
          </div>

          {/* Filter dropdown */}
          <div className="staff-filter">
          <p>Filter staff</p>
            <select value={filterRole} onChange={handleFilterChange}>
              <option value="All staff">All staff</option>
              <option value="Manager">Manager</option>
              <option value="Cashier">Cashier</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Add new staff button */}
          <button className="btn-add-staff">Add New Staff</button>
        </div>
      </div>

      {/* Staff Details Table */}
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
                  <Link to={`/EditStaff/${staffMember.id}`}>
                    <button className="btn-edit">Edit</button>
                  </Link>
                  <button className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
    </div>
  );
};

export default StaffManagement;
