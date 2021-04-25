import { Category } from 'data/types';

/**
 * Check the slug and identify which data should output.
 * It could be all, standard category or location.
 */
const generateAllData = (categories: Category[]): Category => {
  return {
    category: 'all',
    icon: 'GiBallPyramid' as const,
    subcategories: categories,
  };
};

export default generateAllData;
