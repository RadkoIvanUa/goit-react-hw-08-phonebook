import { deleteContact, fetchContacts } from 'redux/operations';
import { StyledItem, transitionGroupStyle } from './StyledContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts, selectFilteredName } from 'redux/selectors';
import { TransitionGroup } from 'react-transition-group';
import { MdDeleteOutline } from 'react-icons/md';
import { Collapse, IconButton } from '@mui/material';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectFilteredName);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredName.toLowerCase())
  );

  return (
    <TransitionGroup style={transitionGroupStyle}>
      {visibleContacts.map(contact => (
        <Collapse key={contact.id}>
          <StyledItem>
            <p>
              <b>{contact.name}</b>: {contact.number}
            </p>
            <IconButton
              variant="outlined"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              <MdDeleteOutline color="red" />
            </IconButton>
          </StyledItem>
        </Collapse>
      ))}
    </TransitionGroup>
  );
}
