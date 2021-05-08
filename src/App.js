import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import initialContacts from './data/initialContacts.json';
import shortid from 'shortid';
import style from './App.module.css';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  handleChange = event => {
    this.setState({
      name: event.currentTarget.value,
      number: event.currentTarget.value,
    });
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      const message = `${name} is already in contacts`;

      alert(message);
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <section className={style.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </section>
    );
  }
}

export default App;
