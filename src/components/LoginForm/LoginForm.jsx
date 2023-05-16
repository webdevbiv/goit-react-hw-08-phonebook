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
      console.log(error);
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const loginUser = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    distpatch(userLoginThunk(loginUser));
    form.reset();
  };

  return (
    <>
      <Form id="loginUser" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> E-mail </Form.Label>
          <Form.Control
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Email name@example.com"
            className="form-input"
            required
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
            className="form-input"
            required
          />
        </Form.Group>
        <div className="btn-wrapper">
          <Button variant="primary" type="submit" className="btn-fit-space">
            Log in
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
