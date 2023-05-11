import React from 'react';
import { Button, Form } from 'react-bootstrap';

const RegistrationForm = () => {
  return (
    <Form id="contact">
      <Form.Group className="mb-3">
        <Form.Label> Name </Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Jacob Mercer"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> E-mail </Form.Label>
        <Form.Control
          type="email"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="name@example.com"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> Password </Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Minimum eight characters, at least one letter and one number"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegistrationForm;
