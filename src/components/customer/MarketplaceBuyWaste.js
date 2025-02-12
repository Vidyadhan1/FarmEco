import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarketplaceBuyWaste() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null); // Add a message state

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8085/waste-details/orders');

        if (response.data && response.data.message === "No orders found") {
          setMessage("No orders found"); // Set the message
          setOrders([]); // Clear any existing orders
        } else {
          setOrders(response.data);
        }

      } catch (err) {
        setError(err);
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (message) { // Display the message if it's set
    return (
      <div className="order-history">
        <h2>Farmer Order History</h2>
        <p>{message}</p> {/* Display the no orders message */}
      </div>
    );
  }

  return (
    <div className="order-history">
      <h2>Waste Market Place</h2>
      <div className="card-container">
        {orders.map(order => (
          <div className="order-card" key={order.farmerid}>
            <div className="d-flex justify-content-center align-items-center">
              {order.imagePath ? (
                <img src={`http://localhost:8085/uploads/${order.imagePath}`} alt="Waste Image" height="150px" width="200px" />
              ) : (
                <div>No Image Available</div>
              )}
            </div>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Waste Type:</strong> {order.wasteType}</p>
            <p><strong>Mobile No:</strong> {order.mobileNo}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Price:</strong> {order.price}</p>
         
            <button type="button" className="btn btn-danger" >Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketplaceBuyWaste;