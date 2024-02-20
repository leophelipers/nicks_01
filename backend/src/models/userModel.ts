import { Model, DataTypes, Association } from 'sequelize';
import sequelize from '../database/config';

class User extends Model {
  declare public id: number;
  declare public name: string;
  declare public email: string;
  declare public password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: 'user',
  }
);

export default User;