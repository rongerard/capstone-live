module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        // your column definitions
        FIRST_NAME: { type: DataTypes.STRING, allowNull: false },
        MIDDLE_NAME: { type: DataTypes.STRING },
        LAST_NAME: { type: DataTypes.STRING, allowNull: false },
        AGE: { type: DataTypes.INTEGER, allowNull: false },
        DOCTOR_NAME: { type: DataTypes.STRING, allowNull: false },
        APPOINTMENT_TIME: { type: DataTypes.STRING, allowNull: false },
        APPOINTMENT_DATE: { type: DataTypes.DATE, allowNull: false },
        REASON: { type: DataTypes.STRING, allowNull: false },
        CONTACT_NUMBER: { type: DataTypes.STRING, allowNull: false },
        TYPE: { type: DataTypes.STRING, defaultValue: false },
        STATUS: { type: DataTypes.STRING, allowNull: false },
        SCHEDULE_ID: { type: DataTypes.INTEGER, allowNull: false },
        SECRETARY_ID: { type: DataTypes.INTEGER },
        DOCTOR_ID: { type: DataTypes.INTEGER, allowNull: false },
        PATIENT_ID: { type: DataTypes.INTEGER },
        createdAt: { type: DataTypes.DATE, allowNull: false },
        updatedAt: { type: DataTypes.DATE, allowNull: false }
    });

    // Define associations with foreign key constraints
    Appointment.associate = function (models) {
        Appointment.belongsTo(models.Schedule, {
            foreignKey: {
                name: 'fk_appointment_schedule',
                field: 'SCHEDULE_ID',
                allowNull: false
            },
            onDelete: 'NO ACTION',
            onUpdate: 'CASCADE'
        });

        Appointment.belongsTo(models.Secretary, {
            foreignKey: {
                name: 'fk_appointment_secretary',
                field: 'SECRETARY_ID',
                allowNull: true
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        });

        Appointment.belongsTo(models.Doctor, {
            foreignKey: {
                name: 'fk_appointment_doctor',
                field: 'DOCTOR_ID',
                allowNull: false
            },
            onDelete: 'NO ACTION',
            onUpdate: 'CASCADE'
        });

        Appointment.belongsTo(models.Patient, {
            foreignKey: {
                name: 'fk_appointment_patient',
                field: 'PATIENT_ID',
                allowNull: true
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        });
    };

    return Appointment;
};
