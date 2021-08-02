import { StoreForGood } from '../models/StoreForGoodModel';

const workTime = {
  fulltime: {
    days: 'пн-сб',
    time: '08:00 - 19:00',
  },
  partTime: {
    days: 'вс',
    time: '09:00 - 17:00',
  },
  weekends: {
    days: '',
    time: '',
  },
};

export const storeForGoodData = [
  new StoreForGood('Москва, ул. Науки 25', workTime, true, 1, '123'),
  new StoreForGood('Москва, ул.  Южная 134', workTime, true, 2, '1234'),
  new StoreForGood(
    'Санкт-Петербург, ул. Красная 19',
    workTime,
    false,
    0,
    '1235'
  ),
  new StoreForGood('Киев, ул Шевченко 167', workTime, false, 0, '1236'),
];
