import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginThunk } from 'redux/auth/operations';
import { selectErrorAuth } from 'redux/auth/selectors';

const LoginForm = () => {
  const distpatch = useDispatch();
  const error = useSelector(selectErrorAuth);

  useEffect(() => {
    if (error) {
      console.log('Wrong E-mail or Password');
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const loginUser = {
      //FIXME - outcoment page
      // email: form.elements.email.value,
      // password: form.elements.password.value,
      email: 'qwertyu@gpoiuyt.com',
      password: 'examplepwd12345',
    };
    distpatch(userLoginThunk(loginUser));
    //form.reset();
  };

  return (
    <div className={'container'}>
      <Form id="loginUser" onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
