import DB from '@databases';
import { CreateCarDto } from '@dtos/car.dto';
import { HttpException } from '@exceptions/HttpException';
import { Car } from '@interfaces/car.interface';
import { isEmpty } from '@utils/util';

class CarsService {
  public cars = DB.Cars;

  public async findAllCars(carParams: any): Promise<Car[]> {
    const filters = carParams.filters?.model ? { model: carParams.filters?.model } : {};
    const order = carParams.order || [];

    const allCars: Car[] = await this.cars.findAll({ order, where: filters });
    return allCars;
  }

  public async findAllModels(): Promise<string[]> {
    const carsWithModels: Car[] = await this.cars.aggregate('model', 'DISTINCT', { plain: false });

    const models: string[] = carsWithModels.map((item: any) => item.DISTINCT);
    return models;
  }

  public async findCarById(carId: number): Promise<Car> {
    if (isEmpty(carId)) throw new HttpException(400, 'CarId is empty');

    const findCar: Car = await this.cars.findByPk(carId);
    if (!findCar) throw new HttpException(409, "Car doesn't exist");

    return findCar;
  }

  public async createCar(carData: CreateCarDto): Promise<Car> {
    if (isEmpty(carData)) throw new HttpException(400, 'carData is empty');

    const createCarData: Car = await this.cars.create(carData);
    return createCarData;
  }

  public async updateCar(carId: number, carData: CreateCarDto): Promise<Car> {
    if (isEmpty(carData)) throw new HttpException(400, 'carData is empty');

    const findCar: Car = await this.cars.findByPk(carId);
    if (!findCar) throw new HttpException(409, "Car doesn't exist");

    await this.cars.update(carData, { where: { id: carId } });

    const updateCar: Car = await this.cars.findByPk(carId);
    return updateCar;
  }

  public async deleteCar(carId: number): Promise<Car> {
    if (isEmpty(carId)) throw new HttpException(400, "Car doesn't existId");

    const findCar: Car = await this.cars.findByPk(carId);
    if (!findCar) throw new HttpException(409, "Car doesn't exist");

    await this.cars.destroy({ where: { id: carId } });

    return findCar;
  }
}

export default CarsService;
