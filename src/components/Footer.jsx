import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__links'>
        <a href='https://github.com/yummyfunnybunny' target='blank'>
          <FontAwesomeIcon className='footer__icon' icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/jake-nichols-6a54b822a/' target='blank'>
          <FontAwesomeIcon className='footer__icon' icon={faLinkedin} />
        </a>
        <a href='mailto:jake.thomas.nichols@gmail.com' target='blank'>
          <FontAwesomeIcon className='footer__icon' icon={faEnvelope} />
        </a>
      </div>
      <div className='footer__copyright section__text'>© 2021 Jake Nichols. All Rights Reserved</div>
    </div>
  );
}

export default Footer;
