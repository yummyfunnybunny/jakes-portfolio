import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Hero() {
  return (
    <div className='section hero'>
      <div className='hero__left'>
        <div className='hero__content'>
          <h1 className='hero__title'>I'm Jake</h1>
          <h3 className='hero__subtitle'>Software | Logistics | Customer Service</h3>
          <div className='hero__links'>
            <a href='https://github.com/yummyfunnybunny' target='blank'>
              <FontAwesomeIcon className='hero__icon' icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/in/jake-nichols-6a54b822a/' target='blank'>
              <FontAwesomeIcon className='hero__icon' icon={faLinkedin} />
            </a>
            <a href='mailto:jake.thomas.nichols@gmail.com' target='blank'>
              <FontAwesomeIcon className='hero__icon' icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
      <div className='hero__right'>
        <div className='hero__portrait'>
          <div className='hero__img' />
          {/* <img className='hero__img' src='hero/hero-portrait.jpg' alt='image of jake' /> */}
          {/* <img className='hero__img' src='hero/hero-portrait.jpg' alt='image of jake' /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
