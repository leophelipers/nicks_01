import { Optional } from 'sequelize';

type UserAttributes = {
  id: string;
  email: string;
  password: string;
  name: string;
  deletedAt: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
};

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}