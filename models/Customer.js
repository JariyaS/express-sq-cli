module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  );
  Customer.associate = (models) => {
    Customer.hasMany(models.Order, {
      foreignKey: {
        name: "departmentId",
        allowNull: false,
      },
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    });
  };

  return Customer;
};
