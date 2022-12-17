import { NextFunction, Request, Response } from 'express';
import carsService from '@services/cars.service';
import { Car } from '@interfaces/car.interface';
import { CreateCarDto } from '@dtos/car.dto';

class CarsController {
  public carsService = new carsService();

  public getCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { filter, sort } = req.query;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const order = sort ? [sort.split('_')] : [[]];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const filters = JSON.parse(filter);

      const findAllCarsData: Car[] = await this.carsService.findAllCars({ filters, order });
      const findAllModels: string[] = await this.carsService.findAllModels();

      res.status(200).json({ cars: findAllCarsData, models: findAllModels, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCarById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const carId = Number(req.params.id);
      const findOneCarData: Car = await this.carsService.findCarById(carId);

      res.status(200).json({ data: findOneCarData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateCarDto = req.body;
      const createCarData: Car = await this.carsService.createCar(userData);

      res.status(201).json({ data: createCarData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const carId = Number(req.params.id);
      const carData: CreateCarDto = req.body;
      const updateCarData: Car = await this.carsService.updateCar(carId, carData);

      res.status(200).json({ data: updateCarData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const carId = Number(req.params.id);
      const deleteCarData: Car = await this.carsService.deleteCar(carId);

      res.status(200).json({ data: deleteCarData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CarsController;
