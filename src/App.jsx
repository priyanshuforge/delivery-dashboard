import { useState } from "react";
import "./App.css";

function App() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([ 
    {
      id: "#ORD101",
      customer: "Rahul Sharma",
      location: "Sector 62, Noida",
      amount: "₹250",
      status: "Pending",
    },
    {
      id: "#ORD102",
      customer: "Anjali Verma", 
      location: "Indirapuram",
      amount: "₹180",
      status: "Picked Up",
    },
    {
      id: "#ORD103",
      customer: "Aman Singh",
      location: "Vaishali",
      amount: "₹320", 
      status: "Delivered",
    },
    {
      id: "#ORD104",
      customer: "Neha Gupta",
      location: "Sector 18, Noida", 
      amount: "₹210",
      status: "Pending",
    },
  ]);
  const updateStatus = (id) => {
    setOrders(
      orders.map((order) => {
        if (order.id === id) {
          let newStatus = order.status;

          if (order.status === "Pending") {
            newStatus = "Picked Up";
          } else if (order.status === "Picked Up") {
            newStatus = "Delivered";
          }

          return {
            ...order,
            status: newStatus,
          };
        }

        return order;
      }),
    );
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🚚 DeliveryPro</h2>

        <nav>
          <a href="#dashboard" className="active">
            🏠 Dashboard
          </a>

          <a href="#orders">📦 Orders</a>

          <a href="#earnings">💰 Earnings</a>

          <a href="#performance">📊 Performance</a>

          <a href="#profile">👤 Profile</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content" id="dashboard">
        <header>
          <div>
            <h1>Welcome back, Priyanshu 👋</h1>
            <p>Here's your delivery overview for today.</p>
          </div>

          <div className="profile">
            <span>🔔</span>
            <span>👤 Priyanshu</span>
          </div>
        </header>

        {/* Dashboard Cards */}
        <section className="stats">
          <div className="card">
            <span>💰</span>
            <p>Today's Earnings</p>
            <h2>₹1,250</h2>
            <small>↑ 12% from yesterday</small>
          </div>

          <div className="card">
            <span>📦</span>
            <p>Total Orders</p>
            <h2>12</h2>
            <small>8 orders completed</small>
          </div>

          <div className="card">
            <span>⭐</span>
            <p>Rating</p>
            <h2>4.8</h2>
            <small>Based on 126 reviews</small>
          </div>

          <div className="card">
            <span>⏱️</span>
            <p>Online Hours</p>
            <h2>6.5 hrs</h2>
            <small>Today's active time</small>
          </div>
        </section>
        {/* Current Orders */}

        <section className="orders-section" id="orders">
          <div className="section-header">
            <div>
              <h2>Current Orders</h2>
              <p>Track and manage your active deliveries</p>
            </div>

            <button className="view-btn">View All Orders</button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Location</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.location}</td>
                    <td>{order.amount}</td>

                    <td>
                      <span
                        className={`status ${
                          order.status === "Pending"
                            ? "pending"
                            : order.status === "Picked Up"
                              ? "pickup"
                              : "delivered"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>

                    <td className="order-actions">
                      <button
                        className="action-btn"
                        onClick={() => setSelectedOrder(order)}
                      >
                        View
                      </button>

                      {order.status !== "Delivered" && (
                        <button
                          className="update-btn"
                          onClick={() => updateStatus(order.id)}
                        >
                          {order.status === "Pending" ? "Pick Up" : "Deliver"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Earnings and Performance */}

        <section className="analytics-section">
          {/* Weekly Earnings */}
          <div className="analytics-card" id="earnings">
            <div className="analytics-header">
              <div>
                <h2>Weekly Earnings</h2>
                <p>Your earnings this week</p>
              </div>

              <h2 className="earning-total">₹7,850</h2>
            </div>

            <div className="earning-row">
              <span>Monday</span>
              <div className="earning-bar">
                <div className="earning-fill monday"></div>
              </div>
              <strong>₹900</strong>
            </div>

            <div className="earning-row">
              <span>Tuesday</span>
              <div className="earning-bar">
                <div className="earning-fill tuesday"></div>
              </div>
              <strong>₹1,150</strong>
            </div>

            <div className="earning-row">
              <span>Wednesday</span>
              <div className="earning-bar">
                <div className="earning-fill wednesday"></div>
              </div>
              <strong>₹1,300</strong>
            </div>

            <div className="earning-row">
              <span>Thursday</span>
              <div className="earning-bar">
                <div className="earning-fill thursday"></div>
              </div>
              <strong>₹1,050</strong>
            </div>

            <div className="earning-row">
              <span>Friday</span>
              <div className="earning-bar">
                <div className="earning-fill friday"></div>
              </div>
              <strong>₹1,450</strong>
            </div>
          </div>

          {/* Performance */}

          <div className="analytics-card" id="performance">
            <div className="analytics-header">
              <div>
                <h2>Performance</h2>
                <p>Your delivery performance</p>
              </div>

              <span className="performance-badge">Excellent</span>
            </div>

            <div className="performance-item">
              <div className="performance-info">
                <span>Delivery Success Rate</span>
                <strong>96%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress success"></div>
              </div>
            </div>

            <div className="performance-item">
              <div className="performance-info">
                <span>On-Time Delivery</span>
                <strong>92%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress ontime"></div>
              </div>
            </div>

            <div className="performance-item">
              <div className="performance-info">
                <span>Customer Satisfaction</span>
                <strong>95%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress satisfaction"></div>
              </div>
            </div>

            <div className="performance-item">
              <div className="performance-info">
                <span>Order Acceptance</span>
                <strong>88%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress acceptance"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Earnings and Performance */}

        <section className="analytics-section">
          {/* Weekly Earnings */}
          <div className="analytics-card" id="earnings">
            ...
          </div>

          {/* Performance */}
          <div className="analytics-card" id="performance">
            ...
          </div>
        </section>

        {/* 👇 YAHA PROFILE CODE PASTE KARO */}

        <section className="profile-section" id="profile">
          <div className="profile-title">
            <div className="profile-avatar">PS</div>

            <div>
              <h2>Priyanshu Singh</h2>
              <p>Delivery Partner</p>
            </div>
          </div>

          <div className="profile-details">
            <div>
              <p>Partner ID</p>
              <strong>DP10245</strong>
            </div>

            <div>
              <p>Total Deliveries</p>
              <strong>428</strong>
            </div>

            <div>
              <p>Rating</p>
              <strong>⭐ 4.8</strong>
            </div>

            <div>
              <p>Member Since</p>
              <strong>January 2026</strong>
            </div>
          </div>
        </section>

        {/* 👆 PROFILE END */}
      </main>
    </div>
  );
}

export default App;
