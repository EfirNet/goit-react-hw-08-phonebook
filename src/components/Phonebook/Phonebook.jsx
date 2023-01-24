import { useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';
import { Title, SubTitle, Wrapper } from './Phonebook.styled';
import UserMenu from '../../modules/UserMenu';
import {
  getContacts,
  getError,
  getIsLoading,
} from '../../redux/contacts/contacts-selectors';

import * as operations from '../../redux/contacts/contacts-operations';

const Phonebook = () => {
  const contacts = useSelector(getContacts, shallowEqual);
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const [filter, setFilter] = useState('');

  const addContact = data => {
    dispatch(operations.addContact(data));
  };

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
  };

  const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterStr = filter.toLowerCase();
    const result = contacts.filter(item => {
      const name = item.name.toLowerCase();
      return name.includes(filterStr);
    });
    return result;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Wrapper>
        <UserMenu />
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter filter={filter} handleChange={changeFilter} />
        {isLoading && <p>...Loading</p>}
        {error && <p>{error.message}</p>}
        {Boolean(filteredContacts.length) && (
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        )}
      </Wrapper>
    </>
  );
};

export default Phonebook;
