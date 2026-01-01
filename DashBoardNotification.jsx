import React, { useState } from "react";

function DashboardNotifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: "📢 New system update available",
      read: false,
    };
    setNotifications([newNotification, ...notifications]);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div style={styles.container}>
      <h2>Dashboard Notifications</h2>

      <div style={styles.header}>
        <button onClick={addNotification} style={styles.addBtn}>
          Add Notification
        </button>

        <span style={styles.badge}>
          🔔 {unreadCount}
        </span>
      </div>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul style={styles.list}>
          {notifications.map((n) => (
            <li
              key={n.id}
              style={{
                ...styles.item,
                backgroundColor: n.read ? "#f0f0f0" : "#e3f2fd",
              }}
            >
              {n.message}

              {!n.read && (
                <button
                  onClick={() => markAsRead(n.id)}
                  style={styles.readBtn}
                >
                  Mark as Read
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {notifications.length > 0 && (
        <button onClick={clearAll} style={styles.clearBtn}>
          Clear All
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  badge: {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "50%",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addBtn: {
    padding: "8px 12px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  readBtn: {
    padding: "5px 8px",
    fontSize: "12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
  clearBtn: {
    marginTop: "10px",
    padding: "8px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default DashboardNotifications
