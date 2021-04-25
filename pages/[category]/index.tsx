import { GetStaticProps } from 'next';
import LayoutCategory from 'components/LayoutCategory';
import generateAllData from 'helpers/generateAllData';
import { Category as CategoryType } from '../api/types';

function Category({ category }) {
  return (
    <LayoutCategory
      category={category.category}
      icon={category.icon}
      keywords={category.keywords}
      subcategories={category.subcategories}
    />
  );
}

export default Category;

// Create a slug for each [category]
export const getStaticPaths = async () => {
  const paths = await fetchCatagoriesPaths();

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySlug = params.category as string;

  const categoriesRes = await fetch(
    `${process.env.VERCEL_URL}/api/categoriesData`,
  );
  const categoriesData = await categoriesRes.json();

  const locationsRes = await fetch(
    `${process.env.VERCEL_URL}/api/locationsData`,
  );
  const locationsData = await locationsRes.json();

  let category: CategoryType[];

  if (categorySlug === 'all') {
    category = [generateAllData(categoriesData)];
  } else if (categoriesData.find((item) => item.category === categorySlug)) {
    category = categoriesData.filter((item) => item.category === categorySlug);
  } else if (locationsData.find((item) => item.category === categorySlug)) {
    category = locationsData.filter((item) => item.category === categorySlug);
  }

  // Pass post data to the page via props
  return {
    props: {
      category: category[0],
    },
  };
};

const fetchCatagoriesPaths = async (): Promise<{ params: any }[]> => {
  // This is a category to show all keywords from the other categories
  const allCategoriesPath = {
    params: { category: 'all' },
  };

  // It creates different paths for each category
  const categoriesRes = await fetch(
    `${process.env.VERCEL_URL}/api/categoriesData`,
  );
  const categoriesData = await categoriesRes.json();
  const categoriesPaths = categoriesData
    .map((category) => ({
      params: { category: category.category },
    }))
    .flat();

  // It creates different paths for each location
  const locationsRes = await fetch(
    `${process.env.VERCEL_URL}/api/locationsData`,
  );
  const locationsData = await locationsRes.json();
  const locationsPath = locationsData.map((location) => ({
    params: { category: location.category },
  }));

  return [allCategoriesPath, ...categoriesPaths, ...locationsPath];
};
