export const fields = {
  name: {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter you name",
    required: true,
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",

  },
  email: {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter email",
    required: true,
  },
  password: {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter password",
    required: true,
    pattern: ".{5,}",
    title: "5 or more characters",
  },
}
