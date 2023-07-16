import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Button, TextField } from '@mui/material';

// STYLES============================================
import { FormContainer } from 'components/StyledContainer';
// ==================================================

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const heandlerSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isContactInclude = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isContactInclude
      ? toast.error(
          'This contact is alredy on the list! Please add other contact!'
        )
      : dispatch(addContact({ name: name, number: number }));
    form.reset();
  };

  return (
    <FormContainer onSubmit={heandlerSubmit}>
      <TextField
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        size="small"
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />

      <TextField
        size="small"
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
      />

      <Button variant="contained" type="submit">
        Add Contact
      </Button>
    </FormContainer>
  );
}
