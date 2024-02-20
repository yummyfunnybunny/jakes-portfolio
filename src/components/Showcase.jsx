function Showcase() {
  return (
    <div className='section showcase'>
      <h1 className='section__title'>SHOWCASE</h1>
      <div className='showcase__grid'>
        {/* Project 1 */}
        <a className='cell' href='/'>
          <div className='cell__img cell__img--1'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>Project Title</h2>
            <p className='section__text'>this is a great project. I love my momma.</p>
            <div className='cell__buttons'>
              <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--quadratiary btn--sm'>Video</button>
              </a>
            </div>
          </div>
        </a>

        {/* Project 2 */}
        <a className='cell'>
          <div className='cell__img cell__img--2'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>Project Title</h2>
            <p className='section__text'>
              this is a great project. I love my momma.this is a great project. I love my momma.this is a great project.
              I love my momma.
            </p>
            <div className='cell__buttons'>
              <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--tertiary btn--sm'>Video</button>
              </a>
            </div>
          </div>
        </a>

        {/* Project 3 */}
        <a className='cell'>
          <div className='cell__img cell__img--3'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>Project Title</h2>
            <p className='section__text'>this is a great project. I love my momma.</p>
            <div className='cell__buttons'>
              <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--tertiary btn--sm'>Video</button>
              </a>
            </div>
          </div>
        </a>

        {/* Project 4 */}
        <a className='cell'>
          <div className='cell__img cell__img--4'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>Project Title</h2>
            <p className='section__text'>this is a great project. I love my momma.</p>
            <div className='cell__buttons'>
              <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--tertiary btn--sm'>Video</button>
              </a>
            </div>
          </div>
        </a>
      </div>
      <a href='/'>
        <button className='btn btn--light btn--quadratiary btn--lg'>See My Github</button>
      </a>
    </div>
  );
}

export default Showcase;
