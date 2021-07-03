import { v4 } from 'uuid';

export class Technology {
  constructor(name, photo) {
    this._id = v4();
    this.name = name;
    this.photo = photo;
  }
}
