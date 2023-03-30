import Link from 'next/link';

const Footer = ({ bgColor }) => {
  return (
    <>
      <footer className={`footer-area ${bgColor}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>About</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> About Indice
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/about'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Careers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/events'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Recent News
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Investor
                        Relations
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/how-it-works'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Content
                        Guidelines
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Terms of
                        Service
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Privacy Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Discover</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/pricing'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Project Cost
                        Guides
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/events'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Upcoming
                        Events
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/gallery'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Mobile App
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Customer
                        Support
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Developers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/gallery'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Collections
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog-1'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Our Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Business With Indice</h3>

                <ul className='link-list'>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Claim your
                        Business
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/gallery'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Advertise on
                        Indice
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/events'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Restaurant
                        Owners
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/testimonial'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Business
                        Success Stories
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Business
                        Support
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/blog-1'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Blog for
                        Business
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/faq'>
                      <a>
                        <i className='flaticon-left-chevron'></i> Privacy Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Languages</h3>
                <div className='languages-switch'>
                  <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Russian</option>
                    <option>Chinese</option>
                  </select>
                </div>

                <h3>Countries</h3>
                <div className='country-switch'>
                  <select>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Spain</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright-area'>
            <p>
              Copyright <span>Zestos</span> is Proudly created by{' '}
              <a href='https://envytheme.com/' target='_blank' rel='noreferrer'>
                Mohions
              </a>
            </p>
          </div>
        </div>

        <div className='footer-image text-center'>
          <img src='images/footer-image.png' alt='image' />
        </div>
      </footer>
    </>
  );
};

export default Footer;
