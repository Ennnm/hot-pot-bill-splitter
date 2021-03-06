export default function initPersonModel(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      // validate: {
      //   min: 0,
      // },
    },
    bill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'bill',
        id: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    underscored: true,
  });
}
