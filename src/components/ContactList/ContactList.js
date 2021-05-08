import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <section>
      <ul className={style.contactsList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={style.contactItem}>
            <p>{name}: </p>
            <p>{number}</p>
            <button
              className={style.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.protTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
