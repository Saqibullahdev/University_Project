module.exports = (sequelize, DataTypes) => {
    const Gallery = sequelize.define('Gallery', {
        ImageID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ImageURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Caption: {
            type: DataTypes.STRING,
            allowNull: true
        },

        Description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UploadDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
        // Add more attributes as needed
    });

    return Gallery;
};
