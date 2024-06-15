import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/database.mjs";
import User from "./user.mjs";

//one to many relation between user and order
class Order extends Model {}
Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Order",
    timestamps: false,
  }
);

export default Order;
