import { useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faJs, faSass, faBootstrap, faMailchimp, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  // Init States
  const [iconColor, setIconColor] = useState('#eeeeee');
  const jsSVG = useRef(document.querySelector('.skills_icon--javascript'));

  return (
    <div className='section skills'>
      <h1 className='section__title'>Skills</h1>

      <div className='skills__collection'>
        {/* FrontEnd */}

        <div className='skills__column skills__column--frontend'>
          <h2 className='section__subtitle'>FrontEnd</h2>

          <div className='skills__grid skills__grid--frontend'>
            {/* javascript */}
            <div className='skills__item skills__item--frontend'>
              <div className='skills__icon skills__icon--javascript' />
              {/* <img className='skills__icon' src='skills/icons8-javascript.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Javascript</h2>
            </div>

            {/* react */}
            <div className='skills__item skills__item--frontend'>
              <div className='skills__icon skills__icon--react' />
              {/* <img className='skills__icon' src='skills/icons8-react.svg'></img> */}
              <h2 className='section__subtitle skills__name'>React</h2>
            </div>

            {/* sass */}
            <div className='skills__item skills__item--frontend'>
              <div className='skills__icon skills__icon--sass' />
              {/* <img className='skills__icon' src='skills/icons8-sass.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Sass</h2>
            </div>

            {/* bootstrap */}
            <div className='skills__item skills__item--frontend'>
              <div className='skills__icon skills__icon--bootstrap' />
              {/* <img className='skills__icon' src='skills/icons8-bootstrap.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Bootstrap</h2>
            </div>

            {/* css */}
            <div className='skills__item skills__item--frontend'>
              <div className='skills__icon skills__icon--css3' />
              {/* <img className='skills__icon' src='skills/icons8-css3.svg'></img> */}
              <h2 className='section__subtitle skills__name'>CSS3</h2>
            </div>

            {/* html */}
            <div className='skills__item skills__item--frontend'>
              <div className='skills__icon skills__icon--html5' />
              {/* <img className='skills__icon' src='skills/icons8-html5.svg'></img> */}
              <h2 className='section__subtitle skills__name'>HTML5</h2>
            </div>

            {/* material ui */}
            <div className='skills__item skills__item--frontend'>
              <div className='skills__icon skills__icon--mui' />
              {/* <img className='skills__icon' src='skills/material-ui-seeklogo.svg'></img> */}
              <h2 className='section__subtitle skills__name'>MaterialUI</h2>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className='skills__column skills__column--backend'>
          <h2 className='section__subtitle'>Backend</h2>

          {/* nodejs */}
          <div className='skills__grid skills__grid--backend'>
            <div className='skills__item skills__item--backend'>
              <div className='skills__icon skills__icon--nodejs' />
              {/* <img className='skills__icon' src='skills/icons8-nodejs.svg'></img> */}
              <h2 className='section__subtitle skills__name'>NodeJS</h2>
            </div>

            {/* mongodb */}
            <div className='skills__item skills__item--backend'>
              <div className='skills__icon skills__icon--mongodb' />
              {/* <img className='skills__icon' src='skills/icons8-mongodb.svg'></img> */}
              <h2 className='section__subtitle skills__name'>MongoDB</h2>
            </div>

            {/* mongoose */}
            <div className='skills__item skills__item--backend'>
              <div className='skills__icon skills__icon--mongoose' />
              {/* <img className='skills__icon' src='skills/icons8-mongoose.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Mongoose</h2>
            </div>

            {/* postgresql */}
            <div className='skills__item skills__item--backend'>
              <div className='skills__icon skills__icon--postgresql' />
              {/* <img className='skills__icon' src='skills/icons8-postgresql.svg'></img> */}
              <h2 className='section__subtitle skills__name'>PostgreSQL</h2>
            </div>

            {/* sequelize */}
            <div className='skills__item skills__item--backend'>
              <div className='skills__icon skills__icon--sequelize' />
              {/* <img className='skills__icon' src='skills/sequelize-seeklogo-white.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Sequelize</h2>
            </div>
          </div>
        </div>

        {/* Tools & Packages */}
        <div className='skills__column skills__column--tools'>
          <h2 className='section__subtitle'>Tools</h2>
          <div className='skills__grid skills__grid--tools'>
            {/* stripe */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--stripe' />
              {/* <img className='skills__icon' src='skills/icons8-stripe.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Stripe</h2>
            </div>

            {/* mailchimp */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--mailchimp' />
              {/* <img className='skills__icon' src='skills/icons8-mailchimp.svg'></img> */}
              <h2 className='section__subtitle skills__name'>MailChimp</h2>
            </div>

            {/* mapbox */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--mapbox' />
              {/* <img className='skills__icon' src='skills/mapbox.svg'></img> */}
              <h2 className='section__subtitle skills__name'>MapBox</h2>
            </div>

            {/* sendgrid */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--sendgrid' />
              {/* <img className='skills__icon' src='skills/sendgrid-seeklogo.svg'></img> */}
              <h2 className='section__subtitle skills__name'>SendGrid</h2>
            </div>

            {/* heroku */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--heroku' />
              {/* <img className='skills__icon' src='skills/icons8-heroku.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Heroku</h2>
            </div>

            {/* figma */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--figma' />
              {/* <img className='skills__icon' src='skills/icons8-figma.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Figma</h2>
            </div>

            {/* jira */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--jira' />
              {/* <img className='skills__icon' src='skills/icons8-jira.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Jira</h2>
            </div>

            {/* mailgun */}
            <div className='skills__item skills__item--tools'>
              <div className='skills__icon skills__icon--mailgun' />
              {/* <img className='skills__icon' src='skills/mailgun-seeklogo.svg'></img> */}
              <h2 className='section__subtitle skills__name'>Mailgun</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
