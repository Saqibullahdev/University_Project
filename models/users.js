module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        UserID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'User'
        }
        // Add more attributes specific to regular users
    });

    return User;
};
