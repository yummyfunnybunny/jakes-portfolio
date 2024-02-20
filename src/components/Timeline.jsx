import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faTruckRampBox,
  faPhoneVolume,
  faLaptopCode,
  faTruckMoving,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Timeline() {
  return (
    <div className='timeline'>
      <h1 className='section__title'>TimeLine</h1>
      <div className='timeline__graph'>
        {/* item 1 */}
        <div className='timeline__item bulb'>
          <div className='bulb__content bulb__content--1'>
            <h5 className='bulb__title section__subtitle'>
              BSBA <br /> UWF
            </h5>
            <p className='bulb__description section__text'>
              I graduated from the University of West Florida with a BSBA in Supply Chain Logistics Management, with
              specializations in data analytics.
            </p>
            <h6 className='bulb__date section__text'>May 2017</h6>
          </div>
          <FontAwesomeIcon className='bulb__icon' icon={faGraduationCap} />
        </div>

        {/* item 2 */}
        <div className='timeline__item bulb'>
          <div className='bulb__content bulb__content--2'>
            <h5 className='bulb__title section__subtitle'>
              Inbound Logistics <br /> FieldCore
            </h5>
            <p className='bulb__description section__text'>
              I worked as an inbound logistics specialist for FieldCore, a GE company, where I managed incoming
              truckloads of parts for a wind-turbine manufacturing plant.
            </p>
            <h6 className='bulb__date section__text'>May 2017 - August 2018</h6>
          </div>
          <FontAwesomeIcon className='bulb__icon' icon={faTruckRampBox} />
        </div>

        {/* item 3 */}
        <div className='timeline__item bulb'>
          <div className='bulb__content bulb__content--3'>
            <h5 className='bulb__title'>
              Emergency Dispatch <br /> Eaton
            </h5>
            <p className='bulb__description section__text'>
              I worked as an emergency dispatcher and scheduler for Eaton Corporation, a leader in the UPS industry.
            </p>
            <h6 className='bulb__date section__text'>March 2019 - August 2020</h6>
          </div>
          <FontAwesomeIcon className='bulb__icon' icon={faPhoneVolume} />
        </div>
        {/* item 4 */}
        <div className='timeline__item bulb'>
          <div className='bulb__content bulb__content--4'>
            <h5 className='bulb__title'>
              Learning Software <br /> Self Taught
            </h5>
            <p className='bulb__description section__text'>
              I spent the next couple of years working part-time as a mason tender while teaching myself software
              through Udemy courses.
            </p>
            <h6 className='bulb__date section__text'>August 2020 - September 2022</h6>
          </div>
          <FontAwesomeIcon className='bulb__icon' icon={faLaptopCode} />
        </div>
        {/* item 5 */}
        <div className='timeline__item bulb'>
          <div className='bulb__content bulb__content--5'>
            <h5 className='bulb__title section__subtitle'>
              Account Executive <br /> Ardent Logistics
            </h5>
            <p className='bulb__description section__text'>
              I put down the software and moved to Utah to work as an account executive, where I managed the Nestle
              account.
            </p>
            <h6 className='bulb__date section__text'>September 2022 - September 2023</h6>
          </div>
          <FontAwesomeIcon className='bulb__icon' icon={faTruckMoving} />
        </div>
        {/* item 6 */}
        <div className='timeline__item bulb'>
          <div className='bulb__content bulb__content--6'>
            <h5 className='bulb__title'>
              Software Development <br /> Devmountain
            </h5>
            <p className='bulb__description section__text'>
              I picked up where I left off with my software studies, but this time I attended a 3 month bootcamp to
              finish what I started.
            </p>
            <h6 className='bulb__date section__text'>November 2023 - March 2024</h6>
          </div>
          <FontAwesomeIcon className='bulb__icon' icon={faSchool} />
        </div>
      </div>
      <a href='/'>
        <button className='btn btn--light btn--primary btn--lg'>See My LinkedIn</button>
      </a>
    </div>
  );
}

export default Timeline;
