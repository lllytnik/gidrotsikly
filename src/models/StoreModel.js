import { v4 } from 'uuid';

export class Store {
  constructor(name, openingTime) {
    this._id = v4();
    this.name = name;
    this.openingTime = openingTime;
  }
}
