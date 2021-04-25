import styled from '@emotion/styled';
import Button from 'components/Button';
import KeywordsList from 'components/KeywordsList';
import { rgba } from 'polished';
import { useState } from 'react';
import { Category } from 'data/types';

type VerifyKeywordProps = Pick<Category, 'keywords'>;

/**
 * @desc outputs if keyword already exist
 */
const VerifyKeyword: React.FC<VerifyKeywordProps> = ({ keywords }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [keywordsAvalilable, setKeywordsAvalilable] = useState<
    VerifyKeywordProps['keywords']
  >([]);
  const [keywordsNotAvalilable, setKeywordsNotAvalilable] = useState<
    VerifyKeywordProps['keywords']
  >([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddOption = (e: React.FormEvent) => {
    e.preventDefault();

    let keyword = inputValue;

    // check if field is empty
    if (keyword.length < 1) {
      return setErrorMessage('Enter a valid value to add the item');
    }

    // The input accepts multiple keywords
    // It converts the string into array on every space
    const arrayKeywords: VerifyKeywordProps['keywords'] = keyword
      .split(/[ ]+/)
      .map((item: any) => item.trim());

    // should only start with #
    if (arrayKeywords.some((item: any) => !item.startsWith('#'))) {
      return setErrorMessage(`Keywords must start with #`);
    }
    // check for forbiden characters
    if (arrayKeywords.some((item: any) => !item.match(/^[a-zA-Z0-9#_ ]+$/i))) {
      return setErrorMessage(
        `Keywords can only start with # and be followoed by letters or _`,
      );
    }

    // create array of existing keywords
    const hasKeyword: VerifyKeywordProps['keywords'] = keywords.filter(
      (item) => {
        if (arrayKeywords.indexOf(item) > -1) {
          return item;
        }
        return null;
      },
    );

    // filter new keywords from hasKeyword
    const newKeywords: VerifyKeywordProps['keywords'] = arrayKeywords
      .filter((x: string) => !hasKeyword.includes(x))
      .concat(hasKeyword.filter((x) => !arrayKeywords.includes(x)));

    // output new keywords
    if (newKeywords.length > 0) {
      setKeywordsAvalilable(newKeywords);
    }

    // output existing keywords
    if (hasKeyword.length > 0) {
      setKeywordsNotAvalilable(hasKeyword);
    }

    // reset state to defaul values
    setInputValue('');
    if (errorMessage !== typeof undefined) {
      setErrorMessage(null);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledVerifyKeyword>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleAddOption}>
        <input
          className='add-option__input'
          type='text'
          name='option'
          value={inputValue}
          onChange={handleTextChange}
          placeholder='Type a keyword. Use space for multiple keywords'
        />

        <Button type='submit' variant='outlined' color='white'>
          Verify keyword
        </Button>
      </form>
      {keywordsNotAvalilable.length > 0 && (
        <div className='keywords-list'>
          <h3>
            {keywordsNotAvalilable.length > 1
              ? 'These keywords '
              : 'This keyword '}
            already exist{keywordsNotAvalilable.length > 1 ? 's' : ''}:
          </h3>
          <KeywordsList keywords={keywordsNotAvalilable} />
        </div>
      )}

      {keywordsAvalilable.length > 0 && (
        <div className='keywords-list'>
          <h3>New Keyword{keywordsAvalilable.length > 1 && 's'}:</h3>
          <KeywordsList keywords={keywordsAvalilable} />
        </div>
      )}
    </StyledVerifyKeyword>
  );
};
export default VerifyKeyword;

const StyledVerifyKeyword = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginTop: 20,
  // From
  form: {
    display: 'inline-flex',
    width: '100%',
    input: {
      border: 'none',
      color: theme.colors.black,
      textAlign: 'center',
      flex: '1 0 0',
      padding: '10px 20px',
      borderRadius: '4px',
    },
    button: {
      marginLeft: 10,
    },
  },
  // Keywords list
  '.keywords-list': {
    width: '100%',
    marginTop: 20,
    h3: {
      color: theme.colors.white,
    },
    '.sidebar': {
      flexDirection: 'row',
      alignItems: 'center',
      right: 0,
      top: 0,
      padding: '0 20px',
      height: '100%',
      background: rgba(theme.colors.muted, 0.1),
      borderLeft: `1px solid ${rgba(theme.colors.muted, 0.2)}`,
      borderRadius: '0 5px 5px 0',
      '& > *': {
        margin: 5,
      },
      '.counter+.copy': {
        marginTop: 5,
      },
    },
  },
}));
