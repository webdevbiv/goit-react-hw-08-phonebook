import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userSignupThunk } from 'redux/auth/operations';
import { selectErrorAuth } from 'redux/auth/selectors';

const RegistrationForm = () => {
  const distpatch = useDispatch();
  const error = useSelector(selectErrorAuth);

  useEffect(() => {
    if (error && error.keyPattern.email) {
      console.log('Email already exists');
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      // name: form.elements.name.value,
      // email: form.elements.email.value,
      // password: form.elements.password.value,
      name: 'lfb',
      email: 'qwertyu@gpoiuytttt.com',
      password: 'examplepwd12345',
    };
    distpatch(userSignupThunk(newUser));
    //form.reset();
  };

  return (
    <div className={'container'}>
      <Form id="userSignup" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> Name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> E-mail </Form.Label>
          <Form.Control
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="name@example.com"
            // required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$"
            title="Minimum five characters, at least one letter and one number"
            // required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
