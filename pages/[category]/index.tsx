import { GetStaticProps } from 'next';
import LayoutCategory from 'components/LayoutCategory';
import generateAllData from 'helpers/generateAllData';
import { Category as CategoryType, Location } from 'data/types';
import categories from 'data/categories';
import locations from 'data/locations';

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
// import LayoutCategory from 'components/LayoutCategory';
// import useSWR from 'swr';
// import fetcher from 'helpers/fetcher';
// import LayoutDefault from 'components/LayoutDefault';
// import { useRouter } from 'next/router';
// import categories from 'data/categories';

// function Category() {
//   const { query } = useRouter();
//   const { data: category, error } = useSWR(
//     () => query.category && `/api/categories/${query.category}`,
//     fetcher,
//   );

//   if (error) return <LayoutDefault>Failed to load</LayoutDefault>;
//   if (!category) return <LayoutDefault>Loading...</LayoutDefault>;

//   return (
//     <LayoutCategory
//       category={category.category}
//       icon={category.icon}
//       keywords={category.keywords}
//       subcategories={category.subcategories}
//     />
//   );
// }

// export default Category;

// // Create a slug for each [category]
// export const getStaticPaths = async () => {
//   const paths = await fetchCatagoriesPaths();

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return {
//     paths,
//     fallback: false,
//   };
// };

// // export const getStaticProps: GetStaticProps = async ({ params }) => {
// //   const categorySlug = params.category as string;

// //   const categoriesRes = await fetch(
// //     `${process.env.VERCEL_URL}/api/categoriesData`,
// //   );
// //   const categoriesData = await categoriesRes.json();

// //   const locationsRes = await fetch(
// //     `${process.env.VERCEL_URL}/api/locationsData`,
// //   );
// //   const locationsData = await locationsRes.json();

// //   let category: CategoryType[];

// //   if (categorySlug === 'all') {
// //     category = [generateAllData(categoriesData)];
// //   } else if (categoriesData.find((item) => item.category === categorySlug)) {
// //     category = categoriesData.filter((item) => item.category === categorySlug);
// //   } else if (locationsData.find((item) => item.category === categorySlug)) {
// //     category = locationsData.filter((item) => item.category === categorySlug);
// //   }

// //   // Pass post data to the page via props
// //   return {
// //     props: {
// //       category: category[0],
// //     },
// //   };
// // };

// const fetchCatagoriesPaths = async (): Promise<{ params: any }[]> => {
//   // This is a category to show all keywords from the other categories
//   const allCategoriesPath = {
//     params: { category: 'all' },
//   };

//   // It creates different paths for each category
//   // const categoriesRes = await fetcher('/api/categoriesData');

//   // const categoriesRes = await fetch(
//   //   `${process.env.VERCEL_URL}/api/categoriesData`,
//   // );
//   // const { data: categoriesData } = await categoriesRes.json();
//   const categoriesPaths = categories
//     .map((category) => ({
//       params: { category: category.category },
//     }))
//     .flat();

//   // It creates different paths for each location
//   // const locationsRes = await fetch(
//   //   `${process.env.VERCEL_URL}/api/locationsData`,
//   // );
//   // const locationsRes = await fetcher('/api/locationsData');
//   // const locationsData = await locationsRes.json();
//   // const locationsPath = locationsData.map((location) => ({
//   //   params: { category: location.category },
//   // }));

//   return [allCategoriesPath, ...categoriesPaths /* , ...locationsPath */];
// };
