import { GetStaticProps } from 'next';
import Head from 'next/head';
import LayoutCategory from 'components/LayoutCategory';
import generateAllData from 'helpers/generateAllData';
import { Category as CategoryType, Location } from 'data/types';
import categories from 'data/categories';
import locations from 'data/locations';

function Category({ category }) {
  return (
    <>
      <Head>
        <title>Street Photography Hashtags - {category.category}</title>
      </Head>
      <LayoutCategory
        category={category.category}
        icon={category.icon}
        keywords={category.keywords}
        subcategories={category.subcategories}
      />
    </>
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

  let category: CategoryType[] | Location[];

  if (categorySlug === 'all') {
    category = [generateAllData(categories)];
  } else if (categories.find((item) => item.category === categorySlug)) {
    category = categories.filter((item) => item.category === categorySlug);
  } else if (locations.find((item) => item.category === categorySlug)) {
    category = locations.filter((item) => item.category === categorySlug);
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

  const categoriesPaths = categories
    .map((category) => ({
      params: { category: category.category },
    }))
    .flat();

  // It creates different paths for each location
  const locationsPath = locations.map((location) => ({
    params: { category: location.category },
  }));

  return [allCategoriesPath, ...categoriesPaths, ...locationsPath];
};
