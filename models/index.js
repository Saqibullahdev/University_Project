const dbConfig = require('../config/dbconfig.json');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
});

const AdminModel = require('./admin');
const UserModel = require('./users');
const NotificationModel = require('./notification');
const GalleryModel = require('./gallery');
const EmailModel = require('./email');

const Admin = AdminModel(sequelize, Sequelize.DataTypes);
const User = UserModel(sequelize, Sequelize.DataTypes);
const Notification = NotificationModel(sequelize, Sequelize.DataTypes);
const Gallery = GalleryModel(sequelize, Sequelize.DataTypes);
const Email = EmailModel(sequelize, Sequelize.DataTypes);

// Establishing relationships
Admin.hasMany(Notification, { foreignKey: 'AdminID' });
Admin.hasMany(Gallery, { foreignKey: 'AdminID' });

User.hasMany(Email, { foreignKey: 'SenderID' });

Notification.belongsTo(Admin, { foreignKey: 'AdminID' });
Gallery.belongsTo(Admin, { foreignKey: 'AdminID' });

module.exports = {
    sequelize,
    Admin,
    User,
    Notification,
    Gallery,
    Email
}
