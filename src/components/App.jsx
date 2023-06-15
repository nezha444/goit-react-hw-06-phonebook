import React, { useEffect } from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setContacts } from './redux/Phonebook/actions';

export const LOCAL_NAME = 'Contacts';
export const App = () => {
  // const [contacts, setContacts] = useState(() =>
  //   JSON.parse(localStorage.getItem(LOCAL_NAME) || [])
  // );
  // const [filter, setFilter] = useState('');

  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.phonebook);

  useEffect(() => {
    localStorage.setItem(LOCAL_NAME, JSON.stringify(contacts));
  }, [contacts]);

  const hendleChangeFilter = event => dispatch(setFilter(event.target.value));
  // const hendleChangeFilter = event => {
  //   setFilter(event.target.value);
  // };

  const handleSubmit = (name, number) => {
    const newContact = {
      id: `id-${nanoid()}`,
      name: name,
      number: number,
    };
    const isExist = contacts.some(
      el =>
        (el.name && el.name.toLowerCase() === name.toLowerCase()) ||
        (el.number && el.number === number)
    );
    if (isExist) {
      alert('Contact already exists');
      return;
    }
    dispatch(setContacts(contacts.concat(newContact)));
    // setContacts(prev => prev.concat(newContact));
  };

  const deleteContact = id => {
    dispatch(setContacts(contacts.filter(contact => contact.id !== id)));
    // setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const getFilterContacts = () => {
    return contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ContactForm handleSubmit={handleSubmit} />
      <Filter hendleChangeFilter={hendleChangeFilter} filter={filter} />
      <ContactList
        contacts={getFilterContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
