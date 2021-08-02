import { Good } from '../models/GoodModel';
import brpAudioPortableSystem from '../assets/images/goods/electronics/brp_audio_portable_system.png';
import wetsuit from '../assets/images/goods/equipment/wetsuit.png'
import garminEchomapPlus62Cv from '../assets/images/goods/electronics/Garmin_Echomap_Plus_62cv.png';
import rfDESSTmKEY from '../assets/images/goods/electronics/RF_D_E_S_S_TM_Key.png';

export const goodsElectronicData = [
  new Good(
    'BRP Audio-портативная система',
    brpAudioPortableSystem,
    '',
    '',
    false,
    true,
    '',
    '',
    ''
  ),
  new Good(
    'Garmin Echomap Plus 62cv',
    garminEchomapPlus62Cv,
    '45800₽',
    '',
    true,
    false,
    '',
    '',
    ''
  ),
  new Good(
    'RF D.E.S.S.TM Key', 
    rfDESSTmKEY,
     '', 
     '', 
     false, 
     true,
     '', 
     '', 
     ''
  ),
  new Good(
    'Мужской костюм 3мм',
    wetsuit,
    '7000₽',
    '',
    true,
    false,
    '',
    '',
    ''
  ),
];
