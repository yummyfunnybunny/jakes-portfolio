import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__links'>
        <FontAwesomeIcon className='footer__icon' icon={faGithub} />
        <FontAwesomeIcon className='footer__icon' icon={faLinkedin} />
        <FontAwesomeIcon className='footer__icon' icon={faEnvelope} />
      </div>
      <div className='footer__copyright section__text'>© 2021 Jake Nichols. All Rights Reserved</div>
    </div>
  );
}

export default Footer;
