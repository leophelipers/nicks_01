import { Sequelize } from 'sequelize-typescript';

let sequelize: Sequelize;

switch (process.env.NODE_ENV) {
  case 'development':
    sequelize = new Sequelize({
      dialect: 'mysql',
      host: process.env.DEV_DB_HOST,
      username: process.env.DEV_DB_USERNAME,
      password: process.env.DEV_DB_PASSWORD,
      database: process.env.DEV_DB_NAME,
      models: [`${__dirname}/../models`],
      logging: false,
      benchmark: false,
    });
    break;

  case 'test':
    sequelize = new Sequelize({
      dialect: 'mysql',
      host: process.env.TEST_DB_HOST,
      username: process.env.TEST_DB_USERNAME,
      password: process.env.TEST_DB_PASSWORD,
      database: process.env.TEST_DB_NAME,
      models: [`${__dirname}/../models`],
      logging: false,
      benchmark: false,
    });
    break;

  case 'production':
    sequelize = new Sequelize({
      dialect: 'mysql',
      host: process.env.PROD_DB_HOST,
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      models: [`${__dirname}/../models`],
      logging: false,
      benchmark: false,
    });
    break;

  default:
    throw new Error(`Unsupported NODE_ENV: ${process.env.NODE_ENV}`);
}

export default sequelize;