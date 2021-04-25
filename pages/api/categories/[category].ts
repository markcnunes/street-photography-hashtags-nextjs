import categories from 'data/categories';
import locations from 'data/locations';
import { Category, Location } from 'data/types';
import generateAllData from 'helpers/generateAllData';

export default function categoryHandler({ query: { category } }, res) {
  let filtered: Category[] | Location[];
  if (category === 'all') {
    filtered = [generateAllData(categories)];
  } else if (categories.find((item) => item.category === category)) {
    filtered = categories.filter((item) => item.category === category);
  } else if (locations.find((item) => item.category === category)) {
    filtered = locations.filter((item) => item.category === category);
  }

  // Category / location with this name exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Catagory with the name: ${category} not found.` });
  }
}
