import { Technology } from '../models/TechnologyModel';
import quadrocycle from '../assets/images/technology/quadrocycle.png';
import jet_ski from '../assets/images/technology/jet_ski.png';
import boat from '../assets/images/technology/boat.png';
import snowcat from '../assets/images/technology/snowcat.png';
import offRoader from '../assets/images/technology/off_roader.png';
import engine from '../assets/images/technology/engine.png';

export const technologyData = [
  new Technology('Квадроциклы', quadrocycle),
  new Technology('Гидроциклы', jet_ski),
  new Technology('Катера', boat),
  new Technology('Снегоходы', snowcat),
  new Technology('Вездеходы', offRoader),
  new Technology('Двигатели', engine),
];
