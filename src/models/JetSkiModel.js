import { GoodModel } from './GoodModel';

export class JetSki extends GoodModel {
  constructor(
    name,
    photo,
    price,
    salePrice,
    isAvailable,
    isOnSale,
    producer,
    productNum,
    rating,
    numOfSeats,
    enginePower,
    engineType,
    modelYear
  ) {
    super(
      name,
      photo,
      price,
      salePrice,
      isAvailable,
      isOnSale,
      producer,
      productNum,
      rating
    );
    this.numOfSeats = numOfSeats;
    this.enginePower = enginePower;
    this.engineType = engineType;
    this.modelYear = modelYear;
  }
}
