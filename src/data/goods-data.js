import { Good } from '../models/GoodModel';
import brpAudioPortableSystem from '../assets/images/goods/electronics/brp_audio_portable_system.png';
import brpPremiumAudioSystem from '../assets/images/goods/electronics/brp_premium_audio_system.png';
import garminEchomapPlus62Cv from '../assets/images/goods/electronics/garmin_echomap_Plus_62cv.png';
import rfDESSTmKEY from '../assets/images/goods/electronics/rf_d_e_s_s_tm_key.png';

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
    'BRP Audio-Premium System',
    brpPremiumAudioSystem,
    '68000₽',
    '',
    true,
    false,
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
  new Good('RF D.E.S.S.TM Key', rfDESSTmKEY, '', '', false, true, '', '', ''),
];
