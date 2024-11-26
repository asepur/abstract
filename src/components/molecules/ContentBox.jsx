
import '../organism/Section.css';
import PropTypes from 'prop-types';


function ContentBox({title, text, imgSrc}) {


  return (

    <div className='section__content--box'>
          <img src={imgSrc} alt="icon1"/>
          <div className='box__content'>
            <h4>{title}</h4>
            <p>{text}</p> 
            <span>
              <a href="#">Learn More →</a>
            </span>

          </div>
    </div>

  );
}

ContentBox.propTypes = {
    imgSrc: PropTypes.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };


export default ContentBox;