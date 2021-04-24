import VerifyKeyword from 'components/VerifyKeyword';
import LayoutDefault from 'components/LayoutDefault';
import styled from '@emotion/styled';
import { GetStaticProps } from 'next';

const StyledDescription = styled('div')({
  '& > div:last-of-type': {
    width: '100%',
  },
});

export default function Contribution({ allCategories }) {
  return (
    <LayoutDefault title='Suggesting new keywords'>
      <StyledDescription>
        <p>
          Contributions are welcomed! If you have suggestions to improve some of
          the categories, please let's know.
        </p>
        <h3>Contribution Guidelines</h3>
        <p>
          Please read our{' '}
          <a
            href='https://github.com/markcnunes/street-photography-hashtags/contributing.md'
            title='website'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contribution Guidelines
          </a>{' '}
          and note that this project is released with a{' '}
          <a
            href='https://github.com/markcnunes/street-photography-hashtags/code-of-conduct.md'
            title='website'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contributor Code of Conduct
          </a>
          . By participating in this project you agree to abide by its terms.
        </p>
        <h3>Adding a keyword</h3>
        <p>
          Only hashtags are accepted. Mentions for keywords won't be allowed
          because these accounts most of time have hastags as well. It will help
          us to filter duplications and keep the list simple. Ensure the keyword
          has good visibility. Wait at least 30 days if it is a newborn keyword
          before submitting it, to give it a chance to mature. Also, check if it
          doesn't exist in some of the categories, as yours may be a duplicate,
          you can send the suggestions to{' '}
          <a
            href='https://www.instagram.com/markcnunes/'
            title="Mark's website"
            target='_blank'
            rel='noopener noreferrer'
          >
            @markcnunes
          </a>{' '}
          or make a pull request that adheres to the{' '}
          <a
            href='https://github.com/markcnunes/street-photography-hashtags/contributing.md'
            title='website'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contribution Guidelines
          </a>{' '}
          if you fill comfortable with Github.
        </p>
        <p>Thanks for helping! 😎</p>
        <h3>Verify if keyword exist</h3>
        <VerifyKeyword keywords={allCategories} />
      </StyledDescription>
    </LayoutDefault>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/categoriesData`,
  );
  const data = await res.json();

  // Pass post data to the page via props
  return {
    props: {
      categories: data,
    },
  };
};
