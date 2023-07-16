import { Container } from 'components/StyledContainer';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Phonebook() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
