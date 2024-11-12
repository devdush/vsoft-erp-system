import React, { useState } from "react";
import "./AddNewSupplier.css";

function AddSupplier() {
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    email: "",
    phone: "",
    address: "",
    itemsList: "",
  });
  const [photo, setPhoto] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
    console.log("Form data:", formData);
    console.log("Uploaded photo:", photo);
  };

  return (
    <div className="add-supplier-container">
      <button className="back-button">Back</button>
      <h2>Add a New Supplier</h2>
      <form onSubmit={handleSubmit} className="supplier-form">
        <div className="upload-photo">
          <label htmlFor="photo">
            <img src="/path/to/default-image.png" alt="Upload photo" />
            <input type="file" id="photo" accept=".jpg, .jpeg, .png" onChange={handlePhotoChange} />
          </label>
          <p>Allowed format: JPG, JPEG, and PNG<br />Max file size: 2MB</p>
        </div>
        
        <div className="form-fields">
          <div className="field-group">
            <label>Name *</label>
            <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="field-group">
            <label>NIC *</label>
            <input type="text" name="nic" placeholder="Enter NIC" value={formData.nic} onChange={handleInputChange} required />
          </div>
          <div className="field-group">
            <label>Email Address *</label>
            <input type="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="field-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div className="field-group">
            <label>Supplier Address *</label>
            <input type="text" name="address" placeholder="Supplier address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div className="field-group">
            <label>Items List *</label>
            <select name="itemsList" value={formData.itemsList} onChange={handleInputChange} required>
              <option value="">Select item</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>
        
        <button type="submit" className="submit-button">Add Supplier</button>
      </form>
      <footer>© 2024 B ERP. All Rights Reserved.</footer>
    </div>
  );
}

export default AddSupplier;
