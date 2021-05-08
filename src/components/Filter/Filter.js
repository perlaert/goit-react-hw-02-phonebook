import PropTypes from 'prop-types';

const Filter = ({ value = ' ', onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
