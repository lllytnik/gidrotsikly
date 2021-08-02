import { ProductCard } from '../models/ProductModel';
import WaterproofBackpack from '../assets/images/goods/equipment/backpack.png';
import LifeVest from '../assets/images/goods/equipment/life_jacket.png';
import brpAudioPremiumSysem from '../assets/images/goods/electronics/brp_premium_audio_system.png';
import RescueEquipment from '../assets/images/goods/equipment/rescue_equipment.png';

export const productCard = [
  new ProductCard(
    'Водонепроницаемый рюкзак',
    WaterproofBackpack,
    '9800₽',
    '',
    true,
    false,
    '',
    '',
    ''
  ),
  new ProductCard(
    'Спасательный жилет BRP Mens Airflow PFD',
    LifeVest,
    '6900₽',
    '',
    true,
    true,
    '',
    '',
    ''
  ),
  new ProductCard(
    'BRP Audio-Premium System',
    brpAudioPremiumSysem,
    '68000₽',
    '',
    true,
    false,
    '',
    '',
    ''
  ),
  new ProductCard(
    'Спасательное снаряжение',
    RescueEquipment,
    '',
    '',
    false,
    true,
    '',
    '',
    ''
  )
];