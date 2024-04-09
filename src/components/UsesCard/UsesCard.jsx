import './UsesCard.css';
import PropTypes from 'prop-types';

const UsesCard = ({ title, description }) => {
  return (
    <div className={'uses-card'}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

UsesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UsesCard;
