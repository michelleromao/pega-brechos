"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("questions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      mensagem: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      data_pergunta: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      anuncio_id: {
        type: Sequelize.INTEGER,
        references: { model: "announcements", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("questions");
  }
};
