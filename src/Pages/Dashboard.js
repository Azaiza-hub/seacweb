import React from "react";
import TableDashboard from './TableDashboard';

const Dashboard = () => {
  return (
    <div
      style={{
        width: "70vw",
        minHeight: "50vh",
        borderRadius: "15px",
        background: "white",
        padding: "1rem",
      }}
    >
      <TableDashboard />
    </div>
  );
};

export default Dashboard;
