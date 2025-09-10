const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');


const User = sequelize.define('User', {
id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
name: { type: DataTypes.STRING, allowNull: false },
email: { type: DataTypes.STRING, unique: true, allowNull: false },
passwordHash: { type: DataTypes.STRING, allowNull: false },
role: { type: DataTypes.ENUM('homemaker','professional','admin'), defaultValue: 'homemaker' },
passion: { type: DataTypes.STRING },
skills: { type: DataTypes.TEXT },
age: { type: DataTypes.INTEGER },
location: { type: DataTypes.STRING },
availability: { type: DataTypes.STRING },
verified: { type: DataTypes.BOOLEAN, defaultValue: false },
});


module.exports = User;