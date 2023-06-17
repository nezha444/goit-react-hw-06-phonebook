import React from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './redux/Phonebook/phonebookSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.phonebook);

  const hendleChangeFilter = event => dispatch(setFilter(event.target.value));

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
      <ContactForm />
      <Filter hendleChangeFilter={hendleChangeFilter} filter={filter} />
      <ContactList />
    </div>
  );
};
