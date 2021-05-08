import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value = ' ', onChange }) => {
  return (
    <div className={style.filterSection}>
      <label>
        Find contacts by name
        <input
          className={style.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
