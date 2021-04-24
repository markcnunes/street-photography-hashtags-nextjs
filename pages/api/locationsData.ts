import { Location } from './types';

const locations: Location[] = [
  {
    category: 'europe',
    keywords: ['#streetsineurope'],
  },
  {
    category: 'london',
    keywords: [
      '#explorelondon',
      '#londonstreet',
      '#londonstreetlife',
      '#londonstreets',
      '#londonphotographer',
      '#londonstreetphotography',
    ],
  },
];

export default (req, res): void => {
  res.statusCode = 200;
  res.json(locations);
};
