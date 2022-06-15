'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Lerian",
        profession: "Software Engineer",
        role: "admin",
        email: "kanglerian@gmail.com",
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Naima",
        profession: "Accountant",
        role: "student",
        email: "naima@gmail.com",
        password: await bcrypt.hash('rahasiaku1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
