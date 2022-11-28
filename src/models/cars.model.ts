import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Car } from '@interfaces/car.interface';

export type CarCreationAttributes = Optional<Car, 'id' | 'model' | 'country' | 'price' | 'year'>;

export class CarsModel extends Model<Car, CarCreationAttributes> implements Car {
  public id: number;
  public model: string;
  public country: string;
  public price: number;
  public year: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CarsModel {
  CarsModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      model: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      price: {
        allowNull: false,
        type: DataTypes.FLOAT(),
      },
      year: {
        allowNull: false,
        type: DataTypes.SMALLINT(),
      },
    },
    {
      tableName: 'cars',
      sequelize,
    },
  );

  return CarsModel;
}
