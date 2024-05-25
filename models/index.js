require('dotenv').config({path:'./.env'});
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('railway', 'root', 'sUVAaDWEJNhAEPbApcDrGadXhnulGDaz', {
    host: 'viaduct.proxy.rlwy.net',
    dialect: 'mysql',
    port:27917,
    ssl:true,
    logging: true,
    
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
