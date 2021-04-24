import ActiveLink from 'components/ActiveLink';
import LayoutDefault from 'components/LayoutDefault';

export default function About() {
  return (
    <LayoutDefault title='Street Photography Hashtags'>
      <p>
        Optimizing your Instagram account can be really challenging sometimes.
        An important part of getting more engagement is to choose the right
        hashtags for your posts and luckily you can get around 3-5% more
        impressions. Instagram changes constantly, and they seem to don't
        promote hashtags as much as before, maybe because street photography is
        getting extremely competitive and also because posts are only a fraction
        how Instagram is used now. The hashtags won't do much but every help
        counts! There is also the chance of getting your photos featured on
        other Instagram accounts.
      </p>
      <p>
        Here you can find some awsome hashtags divided by specific categories
        and even let the random picker choose the keywords for you. All keywords
        have been added as suggestions and we are happy to update if there an
        awsome keyword missing from our list. Any{' '}
        <ActiveLink activeClassName='is-active' href='/contribution'>
          <a className='navbar-item'>contribution</a>
        </ActiveLink>{' '}
        is welcomed!
      </p>
      <h3>Credits</h3>
      <h4> Created by</h4>
      <p>
        <a
          href='https://www.instagram.com/markcnunes/'
          title="Mark's website"
          target='_blank'
          rel='noopener noreferrer'
          color='white'
        >
          Mark Claus Nunes
        </a>
      </p>
      <h4>Icons by</h4>
      <p>
        <a
          href='https://game-icons.net/'
          title="Game-icons' website"
          target='_blank'
          rel='noopener noreferrer'
        >
          Game-icons
        </a>
      </p>
      <p>
        <a
          href='https://feathericons.com/'
          title="Feather Icons' website"
          target='_blank'
          rel='noopener noreferrer'
        >
          Feather Icons
        </a>
      </p>
    </LayoutDefault>
  );
}
