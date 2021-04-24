import styled from '@emotion/styled';
import { rgba } from 'polished';
import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import Modal from 'react-modal';
import { Category } from 'pages/api/types';
import Button from 'components/Button';
import KeywordsList from 'components/KeywordsList/KeywordsList';

interface IRandomModal extends Pick<Category, 'keywords'> {
  /**
   * If `true`, the modal will open.
   */
  showModal: boolean;
  /**
   * Takes a function to close the modal
   */
  handleModal: (event: any) => void;
}
const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: '90%',
  margin: '0 auto',
  padding: 10,
  background: rgba(theme.colors.black, 0.9),
  outline: 'none',
  borderRadius: '.5rem',
  h3: {
    color: theme.colors.white,
    textAlign: 'center',
    width: '100%',
  },
  '.modal__body': {
    display: 'flex',
    justifyContent: 'center',
    overflowY: 'auto',
    width: '100%',
    maxWidth: '90vw',
    maxHeight: '50vh',
    margin: '1rem 0',
    overflow: 'auto',
    borderRadius: '.5rem',
    background: theme.colors.white,
  },
  '.modal__action': {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    '& > *': {
      marginRight: 15,
      marginLeft: 15,
    },
  },
  '@media (min-width: 720px)': {
    padding: '2rem',
    '.modal__body': {
      maxWidth: '70vw',
      padding: '2rem',
      margin: '2rem auto',
    },
  },
  '@media (min-width: 1280px)': {
    maxWidth: 1200,
  },
}));

Modal.setAppElement('body');

const RandomModal: React.FC<IRandomModal> = ({
  keywords,
  showModal,
  handleModal,
}: any) => {
  const handleClosesModal = () => {
    handleModal();
  };

  return (
    <StyledModal
      isOpen={showModal}
      onRequestClose={handleClosesModal}
      contentLabel='Result Modal'
      closeTimeoutMS={200}
      className='modal'
    >
      <h3 className='modal__title'>Random Picker</h3>
      <div className='modal__body'>
        <KeywordsList aria-label='Result List' keywords={keywords} />
      </div>
      <div className='modal__action'>
        <Button
          color='white'
          variant='outlined'
          icon='withText'
          title='Generate a random limited selection of keywords'
          onClick={handleClosesModal}
        >
          <FiXCircle />
          Close
        </Button>
      </div>
    </StyledModal>
  );
};

export default RandomModal;
