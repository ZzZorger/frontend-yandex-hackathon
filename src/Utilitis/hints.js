import IMEI from '../components/HintЕlement/image/IMEI.svg';
import Mark from '../components/HintЕlement/image/Mark.svg';

export default [
  { id: 'bubbleWrap', name: 'Пузырчатая плёнка', backgroundColor: '#E0EEFF' },
  { id: 'stretch', name: 'Стрейтч-плёнка', backgroundColor: '#FFECCC' },
  { id: 'nonPack', name: 'Упаковка не нужна', backgroundColor: '#FFD9DB' },
  { id: 'pack', name: 'Пакет', backgroundColor: '#FFECCC' },
  { id: 'imei', name: 'Отсканируйте IMEI', backgroundColor: '#FFD9DB', img: IMEI },
  { id: 'mark', name: 'Отсканируйте IMEI', backgroundColor: '#FFD9DB', img: Mark },
];
