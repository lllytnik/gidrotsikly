import { Store } from './StoreModel';

export class StoreForGood extends Store {
  constructor(name, openingTime, isAvailable, quantity, goodId) {
    super(name, openingTime);
    this.isAvailable = isAvailable;
    this.quantity = quantity;
    this.goodId = goodId;
  }
}
