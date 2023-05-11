import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';

export function Filter() {
  const dispatch = useDispatch();

  const onChange = e => {
    const filter = e.target.value;
    dispatch(filterContacts(filter));
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Find contacts by name</Form.Label>
      <Form.Control
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
      />
    </Form.Group>
  );
}
