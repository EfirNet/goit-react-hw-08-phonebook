import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Label, Button } from './ContactForm.styled';
import { initialState } from './initialState';

const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({ ...initialState });
  };

  const { name, number } = form;

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name ..."
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor="phone">Number</Label>
        <Input
          type="tel"
          name="number"
          placeholder="Enter phone number ..."
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
