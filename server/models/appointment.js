const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const secretary = require('./secretary');
const patient = require('./patient');
const schedule = require('./schedule');
const doctor = require('./doctor');

const Appointment = sequelize.define('Appointment', {
    FIRST_NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MIDDLE_NAME: {
        type: DataTypes.STRING,
        allowNull: true
    },
    LAST_NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AGE: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    DOCTOR_NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    APPOINTMENT_TIME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    APPOINTMENT_DATE: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    REASON: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CONTACT_NUMBER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TYPE: {
        type: DataTypes.STRING,
        defaultValue: false
    },
    STATUS: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SCHEDULE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Associations

// Secretary association
secretary.hasMany(Appointment, {
    foreignKey: {
        name: 'fk_secretary_id',  // Unique foreign key constraint name
        allowNull: true
    }
});
Appointment.belongsTo(secretary, {
    foreignKey: {
        name: 'fk_secretary_id',  // Same name to match
        allowNull: true
    }
});

// Schedule association
schedule.hasMany(Appointment, {
    foreignKey: {
        name: 'fk_schedule_id',  // Unique foreign key constraint name
        allowNull: false
    }
});
Appointment.belongsTo(schedule, {
    foreignKey: {
        name: 'fk_schedule_id',  // Same name to match
        allowNull: false
    }
});

// Doctor association
doctor.hasMany(Appointment, {
    foreignKey: {
        name: 'fk_doctor_id',  // Unique foreign key constraint name
        allowNull: false
    }
});
Appointment.belongsTo(doctor, {
    foreignKey: {
        name: 'fk_doctor_id',  // Same name to match
        allowNull: false
    }
});

// Patient association
patient.hasMany(Appointment, {
    foreignKey: {
        name: 'fk_patient_id',  // Unique foreign key constraint name
        allowNull: true
    }
});
Appointment.belongsTo(patient, {
    foreignKey: {
        name: 'fk_patient_id',  // Same name to match
        allowNull: true
    }
});

module.exports = Appointment;
