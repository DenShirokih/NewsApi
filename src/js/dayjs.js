import locale from 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';



dayjs.locale('ru');
dayjs.extend(relativeTime);  
// const articleDate = dayjs('2022-06-14T12:00:00');
// // const dayNow = dayjs('2022-05-24T18:00:00');
// const differentTime = dayjs().locale('ru').to(articleDate);
// console.log(differentTime);


