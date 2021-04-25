import styled from '@emotion/styled';
import React, { useState } from 'react';
import { GiPerspectiveDiceSixFacesThree } from 'react-icons/gi';
import { Category } from 'data/types';
import Button from 'components/Button';
import RandomModal from './RandomModal';

interface Ioptions {
  /**
   * Value of the select field to determine the limit of keywords to output from the Random Picker.
   */
  value: string;
}

type RandomPickerProps = Pick<Category, 'keywords'>;

/**
 * Create array of 30 items
 */
const options: Ioptions[] = Array.from(Array(30).keys()).map((item) => ({
  value: (item + 1).toString(),
}));

const StyledRandomPicker = styled('div')((props) => ({
  h4: {
    marginTop: 0,
  },
  form: {
    '& > *': {
      width: '100%',
      justifyContent: 'center',
    },
  },
  label: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 20,
    borderRadius: 5,
    border: '1px solid currentColor',

    '&::before, &::after': {
      content: '""',
      borderRight: '4px solid transparent',
      borderLeft: '4px solid transparent',
      borderTop: `4px solid ${props.theme.colors.muted}`,
      position: 'absolute',
      top: '50%',
      right: '15px',
      pointerEvents: 'none',
    },
    '&::before': {
      transform: 'translateY(-180%) rotate(180deg)',
    },
    '&::after': {
      transform: 'translateY(-20%)',
    },
    select: {
      appearance: 'none',
      marginLeft: 'auto',
      padding: '10px 45px 10px 35px',
      background: props.theme.colors.white,
      border: 'none',
      outline: 'none',
    },
  },
  button: {
    svg: {
      width: 25,
      height: 25,
    },
  },
}));

/**
 * @desc Randomly chooses keywords for the user.
 */
const RandomPicker: React.FC<RandomPickerProps> = ({ keywords }) => {
  const [randomPickedKeywords, setRandomPickedKeywords] = useState<
    RandomPickerProps['keywords']
  >([]);
  const [showModal, setShowModal] = useState(false);

  const openeModal = (e: MouseEvent) => {
    e.preventDefault();
    handleModal();
  };

  const handleModal = () => {
    if (!showModal) {
      handleRandomSelection();
    }
    setShowModal(!showModal);
  };

  /**
   * @desc Finds a random index from optionsAvailable and moves this item from this tist to the result.
   */
  const handleRandomSelection = () => {
    const limit = Number(selectedOption);

    let optionsAvailable: RandomPickerProps['keywords'] = keywords;
    let result: RandomPickerProps['keywords'] = [];

    for (let i = 0; result.length < limit; i++) {
      let randomNum = Math.floor(Math.random() * optionsAvailable.length);
      let option = optionsAvailable[randomNum];
      result.push(option);
      optionsAvailable = optionsAvailable.filter((o) => o !== option);
    }
    setRandomPickedKeywords(result);
  };

  const [selectedOption, setSelectedOption] = useState(options[19].value);
  return (
    <StyledRandomPicker>
      <h4>Random selection of keywords</h4>
      <form>
        <label>
          Quantity
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.value}
              </option>
            ))}
          </select>
        </label>
        <Button
          icon='withText'
          title='Generate a random limited selection of keywords'
          onClick={openeModal}
          disabled={Number(selectedOption) > keywords.length}
        >
          <GiPerspectiveDiceSixFacesThree />
          I'm Feeling Lucky
        </Button>
      </form>
      <RandomModal
        keywords={randomPickedKeywords}
        showModal={showModal}
        handleModal={handleModal}
      />
    </StyledRandomPicker>
  );
};

export default RandomPicker;
