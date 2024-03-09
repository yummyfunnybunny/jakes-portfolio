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
            I have spent my entire working life in customer-facing eviornments. Whether it be in front-desk hotel
            reception, assistant management in the restaurant & entertainment sector, or emergency dispatching in the
            electrical sector.{' '}
          </p>
          {/* <div className='section__highlight'> */}
          <p className='section__text section__highlight section__highlight--light'>
            I take pride in solving problems for people.
          </p>
          {/* </div> */}
          <p className='section__text'>
            I earned my BSBA in Supply Chain Logistics Management and took electives in advanced excel and data
            analytics, and now strive to add software to my arsenal of skillsets. I hope to combine my logistics
            education, customer service experience, and software capabilities to provide a unique service to the world!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
