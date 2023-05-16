import { useAuth } from 'components/hooks';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userSignupThunk } from 'redux/auth/operations';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const distpatch = useDispatch();
  const { error } = useAuth();

  useEffect(() => {
    if (error && error.name) {
      // console.log('Email already exists');
      toast.warn(`Email already exists`, {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [error]);

  const handleSubmit = e => {
    e.preventDefault();
    // const form = e.target;
    const newUser = {
      //FIXME - outcomment page
      // name: form.elements.name.value,
      // email: form.elements.email.value,
      // password: form.elements.password.value,
      name: 'lfb',
      email: 'qwertyu123456@gpoiuytttt.com',
      password: 'examplepwd12345',
    };
    distpatch(userSignupThunk(newUser));
    //form.reset();
  };

  return (
    <div>
      <Form id="userSignup" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label> Name </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            className="form-input"
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
            className="form-input"
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
            className="form-input"
            // required
          />
        </Form.Group>
        <div className="btn-wrapper">
          <Button className="btn-fit-space" variant="primary" type="submit">
            Sign up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationForm;
