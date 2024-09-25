const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Appointment = require('./appointment'); // Ensure correct path
const QueueManagement = require('./queueManagement'); // Ensure correct path

const Queue = sequelize.define('Queue', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    QUEUE_NUMBER: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    APPOINTMENT_ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    MESSAGE_ID: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PROGRESS: {
        type: DataTypes.STRING,
        allowNull: true
    },
    STATUS: {
        type: DataTypes.STRING,
        allowNull: true
    },
    SERVED: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
});

// Associations
Queue.belongsTo(Appointment, { foreignKey: 'APPOINTMENT_ID', allowNull: true });
Appointment.hasOne(Queue, { foreignKey: 'APPOINTMENT_ID', allowNull: true });

QueueManagement.hasMany(Queue, { foreignKey: 'QUEUE_MANAGEMENT_ID', allowNull: false });
Queue.belongsTo(QueueManagement, { foreignKey: 'QUEUE_MANAGEMENT_ID', allowNull: false });

module.exports = Queue;
