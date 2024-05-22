module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
        NotificationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ImageURL:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        Status: {
            type: DataTypes.ENUM('Read', 'Unread'),
            allowNull: true,
            defaultValue: 'Unread'
        }
        // Add more attributes as needed
    });

    return Notification;
};
