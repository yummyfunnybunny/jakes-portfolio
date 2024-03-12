function About() {
  return (
    <div className='section about'>
      <div className='about__left'>
        <div className='about__portrait'>
          {/* <img className='about__img' src='about/about-2.jpg' /> */}
          <div className='about__img' />
        </div>
      </div>
      <div className='about__right'>
        <div className='about__content'>
          <h1 className='section__title'>Welcome</h1>
          <p className='section__text'>
            I have spent my entire working life in customer-facing environments. Whether it be in front-desk hotel
            reception, assistant management in the restaurant & entertainment sector, or emergency dispatching in the
            electrical sector, and most recently, coordinating with drivers, dispatchers, and customers in the freight
            brokerage sector. I've thrived in high-paced work environments that demand constant adaptation.
          </p>
          {/* <div className='section__highlight'> */}
          <p className='section__text section__highlight section__highlight--light'>
            I've thrived in high-paced work environments that demand constant adaptation.
          </p>
          <p className='section__text'>
            I earned my BSBA in Supply Chain Logistics Management and took electives in advanced excel and data
            analytics. I've most recently added software engineering to my skill-set and am eager to provide a unique
            set of skills in the software sector. With a proven track record of people skills and coordination, I am
            excited to continue carving my niche in this world. There's nothing more rewarding than working hard and
            solving problems for other people.
          </p>
          <p className='section__text section__highlight section__highlight--light'>
            There's nothing more rewarding than working hard and solving problems for other people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
