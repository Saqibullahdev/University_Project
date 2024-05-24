require('dotenv').config();
const { Sequelize } = require('sequelize');

console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port:process.env.DB_PORT,
    ssl:true,
    logging: true
    
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
