import React, { useState } from "react";
import "./OrderRequest.css";

function OrderRequest() {
  const [orderItems, setOrderItems] = useState([]);
  const [formData, setFormData] = useState({
    item: "",
    quantity: "",
    date: "",
    unitPrice: "",
    totalPrice: "",
    requestedBy: "Kaveon Nirmal",
    sentTo: "",
    attachment: "",
    attachmentType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addItem = () => {
    setOrderItems([...orderItems, { ...formData }]);
    setFormData({
      ...formData,
      item: "",
      quantity: "",
      unitPrice: "",
      totalPrice: "",
      sentTo: "",
      attachment: "",
      attachmentType: "",
    });
  };

  const sentRequests = [
    { orderId: "01", date: "2024-10-12", sendingStatus: "Sent", requestStatus: "Pending" },
    { orderId: "02", date: "2024-10-01", sendingStatus: "Sent", requestStatus: "Approved" },
  ];

  return (
    <div className="order-request-container">
      {/* Order Request Form */}
      <div className="order-request">
        <h2>Order Request</h2>
        <div className="order-form">
          <input type="text" name="item" placeholder="Enter item name" value={formData.item} onChange={handleInputChange} />
          <input type="text" name="quantity" placeholder="Enter quantity" value={formData.quantity} onChange={handleInputChange} />
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
          <input type="text" name="unitPrice" placeholder="Enter amount" value={formData.unitPrice} onChange={handleInputChange} />
          <input type="text" name="totalPrice" placeholder="Enter amount" value={formData.totalPrice} onChange={handleInputChange} />
          <input type="text" readOnly value={formData.requestedBy} />
          <select name="sentTo" value={formData.sentTo} onChange={handleInputChange}>
            <option value="">Select option</option>
          </select>
          <input type="file" name="attachment" onChange={handleInputChange} />
          <select name="attachmentType" value={formData.attachmentType} onChange={handleInputChange}>
            <option value="">Select option</option>
          </select>
          <button onClick={addItem}>Add Item</button>
        </div>
      </div>

      {/* Requesting List */}
      <div className="requesting-list">
        <h2>Requesting List</h2>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Unit Price (₹)</th>
              <th>Total Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.item}</td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>{item.unitPrice}</td>
                <td>{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="action-buttons">
          <button>Save and Send for Approval</button>
          <button>Save</button>
        </div>
      </div>

      {/* Sent Requests */}
      <div className="sent-requests">
        <h2>Sent Requests</h2>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Date</th>
              <th>Sending Status</th>
              <th>Request Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sentRequests.map((request, index) => (
              <tr key={index}>
                <td>{request.orderId}</td>
                <td>{request.date}</td>
                <td>{request.sendingStatus}</td>
                <td>{request.requestStatus}</td>
                <td>
                  {request.requestStatus === "Pending" ? (
                    <button className="edit-button">Edit</button>
                  ) : (
                    <button className="send-to-button">Send To</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer>© 2024 BOBM. All rights reserved.</footer>
    </div>
  );
}

export default OrderRequest;
