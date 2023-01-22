import { Li, Ul, Button, Name, Number } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(item => (
    <Li key={item.id}>
      <Name>{item.name}:</Name>
      <Number>{item.number}</Number>
      <Button onClick={() => deleteContact(item.id)}>Delete</Button>
    </Li>
  ));

  return <Ul>{elements}</Ul>;
};

export default ContactList;
