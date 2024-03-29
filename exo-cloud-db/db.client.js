const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://esgi_cloud_exam_db_86954_user:ciAqrIMnHzv0gsyilkVZCLaa0sqXNpSZ@dpg-cn2acrv109ks7394o8r0-a.oregon-postgres.render.com/esgi_cloud_exam_db_86954', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
