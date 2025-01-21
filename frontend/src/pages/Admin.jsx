import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Admin = () => {
  // Sample Data for Charts
  const lineData = [
    { name: "Jan", Sales: 400 },
    { name: "Feb", Sales: 300 },
    { name: "Mar", Sales: 500 },
    { name: "Apr", Sales: 700 },
    { name: "May", Sales: 600 },
  ];

  const pieData = [
    { name: "Gold", value: 60 },
    { name: "Silver", value: 30 },
    { name: "Diamond", value: 10 },
  ];

  const COLORS = ["#FFD700", "#C0C0C0", "#B9F2FF"];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4", minHeight: "100vh", marginRight:"50px"}}>
      <Typography variant="h4" gutterBottom>
      Tiffany Céleste Jewelry Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4" color="primary">
              $50,000
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">New Customers</Typography>
            <Typography variant="h4" color="secondary">
              120
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">Orders</Typography>
            <Typography variant="h4" style={{ color: "#4caf50" }}>
              450
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">Feedback</Typography>
            <Typography variant="h4" style={{ color: "#f44336" }}>
              85%
            </Typography>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>
              Monthly Sales
            </Typography>
            <LineChart width={600} height={300} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Product Distribution
            </Typography>
            <PieChart width={300} height={300}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;