const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Database configuration
const sequelize = new Sequelize('departmentwebsite', 'avnadmin', 'AVNS_Hqt-u1Rz8KuKQWuMW26', {
  host: 'mysql-2e3cac1b-saqibregi43.i.aivencloud.com',
  dialect: 'mysql',
  ssl: true,
  port:'11909',
  logging: console.log, // Optional: You can disable logging by setting it to false
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define a model
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  // Other model options go here
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('User model was synchronized successfully.');
  })
  .catch(err => {
    console.error('An error occurred while synchronizing the User model:', err);
  });

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
