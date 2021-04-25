/* Icons reference: https://react-icons.github.io/react-icons/icons?name=gi */

/**
 * Takes one of the following strings as corresponds to icons variations
 */

export type CategoryIcon =
  | 'GiBalloons'
  | 'GiBallPyramid'
  | 'GiBlackball'
  | 'GiFilmStrip'
  | 'GiModernCity'
  | 'GiNewspaper'
  | 'GiPalette'
  | 'GiSuspicious'
  | 'GiSpy'
  | 'GiTrophy';

interface CategoryCore {
  /**
   * Title of the page
   */
  category: string;
  /**
   * Icon
   */
  icon: CategoryIcon;
  /**
   * Array of keywords
   */
  keywords?: string[];
}

export interface Category extends CategoryCore {
  /**
   * Array of categories
   */
  subcategories?: CategoryCore[];
}

export type Location = Omit<CategoryCore, 'icon'>;
