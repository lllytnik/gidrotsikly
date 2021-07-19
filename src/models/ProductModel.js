import { v4 } from 'uuid';

export class ProductCard {
  constructor(
    name,
    photo,
    price,
    salePrice,
    isAvailable,
    isOnSale,
    producer,
    productNum,
    rating
  ) {
    this._id = v4();
    this.name = name;
    this.photo = photo;
    this.price = price;
    this.salePrice = salePrice;
    this.isAvailable = isAvailable;
    this.isOnSale = isOnSale;
    this.producer = producer;
    this.productNum = productNum;
    this.rating = rating;
  }
}