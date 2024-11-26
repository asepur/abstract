
import './Footer.css';
import LinkBox from '../molecules/LinkBox.jsx'

function Footer() {


  return (
    <footer className='footer'>
      <div className='footer__content'>
          <LinkBox title={'Abstract'} links={['Start Trial', 'Pricing', 'Download']} />
          <LinkBox title={'Community'} links={['Twitter', 'LinkedIn', 'Facebook', 'Dribble', 'Podcast']} />
        
          <LinkBox title={'Resources'} links={['Blog', 'Help Center', 'Release Notes', 'Status']} />
          <LinkBox title={'Company'} links={['About Us', 'Careers', 'Legal']} />

          <div>
            <span>Contact us</span>
            <a>info@abstract.com</a>
          </div>

      </div>

      <div className='footer__last'>
        <svg className="abstract-logo-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 51" preserveAspectRatio="xMinYMid slice">
            <g className="abstract-logo-mark-footer" fill="#fff">
                <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
                <circle cx="21.24" cy="29.58" r="4.96"></circle>
              </g>
            </svg>
        <span>© Copyright 2024</span>
        <span>Abstract Studio Design, Inc.</span>
        <span>All rights reserved</span>
      </div>
      
    </footer>
  );
}


export default Footer;

