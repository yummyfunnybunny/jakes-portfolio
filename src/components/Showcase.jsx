function Showcase() {
  return (
    <div className='section showcase'>
      <h1 className='section__title'>SHOWCASE</h1>
      <div className='showcase__grid'>
        {/* Project 1 */}
        <div className='cell'>
          <div className='cell__img cell__img--1'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>uPlow</h2>
            <p className='section__text'>React | NodeJS | PostgreSQL | Mapbox | Weather API </p>
            <p className='section__text'>Connect property owners with snow removal services.</p>
            <p className='section__text'>Create an account as a property owner, or as a plower.</p>
            <p className='section__text'>Search for and request services or posted jobs!</p>
            <div className='cell__buttons'>
              {/* <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a> */}
              <a href='http://18.223.185.32/uplow/' target='blank'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              {/* <a href='/'>
                <button className='btn btn--light btn--quadratiary btn--sm'>Video</button>
              </a> */}
              {/* <a>
                <button className='btn btn--light btn--tertiary btn--sm'>Live Demo Coming Soon</button>
              </a> */}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className='cell'>
          <div className='cell__img cell__img--2'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>Trail Tribe</h2>
            <p className='section__text'>React | NodeJS | MUI | PostgreSQL | Mapbox | OSM API</p>
            <p className='section__text'>Mix between Facebook and Alltrails.</p>
            <p className='section__text'>Find trails, post hikes, connect with users, and react to others posts!</p>
            <p className='section__text'>Search for trails anywhere in the world!</p>
            <div className='cell__buttons'>
              {/* <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--tertiary btn--sm'>Video</button>
              </a> */}
              <a>
                <button className='btn btn--light btn--tertiary btn--sm'>Live Demo Coming Soon</button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className='cell'>
          <div className='cell__img cell__img--3'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>Natours</h2>
            <p className='section__text'>Pug Templates | NodeJS | MongoDB | Mapbox | Nodemailer</p>
            <p className='section__text'>Search for and signup to listed tours</p>
            <p className='section__text'>cloud-based data storage with MongoDB Atlas</p>
            <p className='section__text'>Authenticate with password hashing and email verification</p>
            <div className='cell__buttons'>
              {/* <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--tertiary btn--sm'>Video</button>
              </a> */}
              <a>
                <button className='btn btn--light btn--tertiary btn--sm'>Live Demo Coming Soon</button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className='cell'>
          <div className='cell__img cell__img--4'></div>
          <div className='cell__info'>
            <h2 className='section__subtitle'>Forkify</h2>
            <p className='section__text'>Javascript | CSS | forkify API</p>
            <p className='section__text'>Search for recipes</p>
            <p className='section__text'>like recipes and create shopping lists</p>
            <div className='cell__buttons'>
              {/* <a href='/'>
                <button className='btn btn--light btn--primary btn--sm'>Details</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--secondary btn--sm'>Demo</button>
              </a>
              <a href='/'>
                <button className='btn btn--light btn--tertiary btn--sm'>Video</button>
              </a> */}
              <a>
                <button className='btn btn--light btn--tertiary btn--sm'>Live Demo Coming Soon</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href='https://github.com/yummyfunnybunny' target='blank'>
        <button className='btn btn--light btn--quadratiary btn--lg'>See My Github</button>
      </a>
    </div>
  );
}

export default Showcase;
