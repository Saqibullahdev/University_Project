module.exports = (sequelize, DataTypes) => {
    const Email = sequelize.define('Email', {
        EmailID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        RecipientEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        DateSent: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Status: {
            type: DataTypes.ENUM('Sent', 'Unsent', 'Error'),
            allowNull: false,
            defaultValue: 'Unsent'
        }
        // Add more attributes as needed
    });

    return Email;
};
