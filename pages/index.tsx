import Head from 'next/head';
import styled from '@emotion/styled';
import LinkCTA from 'components/LinkCTA';
import { GetStaticProps } from 'next';
import generateAllData from 'helpers/generateAllData';

const StyledHome = styled('div')((props) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 0 0',
  paddingBottom: 60,
  color: props.theme.colors.white,
  main: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    '& > div': {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '10px 20px',
    },
  },
  '@media (min-width: 780px)': {
    main: {
      '& > div': {
        justifyContent: 'center',
        padding: '50px 20px',
      },
    },
  },
}));

const StyledSubheader = styled('div')({
  width: '100%',
  padding: '10px 20px',
  textAlign: 'center',
  '@media (max-width: 780px)': {
    h1: {
      fontSize: 20,
    },
    h2: {
      fontSize: 14,
    },
  },
});

const StyledLocations = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  '& > h3': {
    textAlign: 'center',
    width: '100%',
  },
  '& > div': {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  a: {
    height: 'auto',
    padding: '15px 30px',
  },
});

export default function Home({ categories, locations }) {
  const { category: allCategory, icon: allIcon } = generateAllData(categories);
  return (
    <>
      <Head>
        <title>Street Photography Hashtags</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledHome>
        <StyledSubheader>
          <h1>Street Photography Hashtags</h1>
          <h2>A curation of hashtags for street photography on Instagram.</h2>
        </StyledSubheader>
        <main>
          <div>
            <LinkCTA category={allCategory} icon={allIcon} key={allCategory} />
            {categories.map((item) => (
              <LinkCTA
                category={item.category}
                icon={item.icon}
                key={item.category}
              />
            ))}
          </div>
          <StyledLocations>
            <h3>Locations</h3>
            <div>
              {locations.map((item) => (
                <LinkCTA category={item.category} key={item.category} />
              ))}
            </div>
          </StyledLocations>
        </main>
      </StyledHome>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('process.env.VERCEL_URL', process.env.VERCEL_URL);
  const categoriesRes = await fetch(
    `${process.env.VERCEL_URL}/api/categoriesData`,
  );
  const categoriesData = await categoriesRes.json();

  const locationsRes = await fetch(
    `${process.env.VERCEL_URL}/api/locationsData`,
  );
  const locationsData = await locationsRes.json();

  // Pass post data to the page via props
  return {
    props: {
      categories: categoriesData,
      locations: locationsData,
    },
  };
};
