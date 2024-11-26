import './LinkBox.css';
import PropTypes from 'prop-types';

function LinkBox({ title, links = [] }) { // Asignamos [] como valor por defecto
  return (
    <div className="linkBox">
      <h4>{title}</h4>
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

LinkBox.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string), // No es necesario que sea obligatorio
};

export default LinkBox;

