import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
} from 'react-share';
import { toast } from 'react-toastify';
import Button from 'components/Button';

interface IShareButtons {
  /**
   * Takes a string as title
   */
  title?: string;
}

const ShareButtons: React.FC<IShareButtons> = (props) => {
  const shareUrl = global.window && window.location.href;
  const title = props.title;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(title + ' :: ' + shareUrl);
    toast('✔️ Copied to Clipboard', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className='share-buttons'>
      <FacebookShareButton
        url={shareUrl}
        title={title}
        className='share-buttons__item'
      >
        <FacebookIcon size={32} round bgStyle={{ fill: 'none' }} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className='share-buttons__item'
      >
        <TwitterIcon size={32} round bgStyle={{ fill: 'none' }} />
      </TwitterShareButton>

      <RedditShareButton
        url={shareUrl}
        title={title}
        windowWidth={660}
        windowHeight={460}
        className='share-buttons__item'
      >
        <RedditIcon size={32} round bgStyle={{ fill: 'none' }} />
      </RedditShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=':: '
        className='share-buttons__item'
      >
        <WhatsappIcon size={32} round bgStyle={{ fill: 'none' }} />
      </WhatsappShareButton>

      <Button
        onClick={copyToClipboard}
        variant='text'
        title='Copy link to clipboard'
        color='white'
        className='share-buttons__clipboard'
      >
        <svg
          className='share-buttons__icon'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          stroke='currentColor'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
          <rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
        </svg>
      </Button>
    </div>
  );
};

export default ShareButtons;
