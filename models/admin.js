module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        AdminID: {
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
            defaultValue: 'Admin'
        }
        // Add more attributes specific to admins
    });

    return Admin;
};
