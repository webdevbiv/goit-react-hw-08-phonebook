import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column " style={{ padding: '16px' }}>
      <h1 className="mb-4 title">Phone Book</h1>
      <Helmet>
        <title>Phone Book</title>
        <meta
          name="description"
          content="Effortlessly manage your contacts' names and numbers with our Phone Book App. Keep all your important contact information in one place, including phone numbers, email addresses, and additional details. Easily add, edit, and search for contacts, ensuring you stay organized and connected. Streamline your contacts management and communication with our intuitive Phone Book App, making it simple to find and reach out to your contacts whenever you need."
        />
      </Helmet>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: '30px',
        }}
      >
        <Link to="/login">
          <button
            variant="primary"
            className={`btn btn-primary mx-2`}
            style={{ width: '80px' }}
          >
            Log in
          </button>
        </Link>
        <Link to="/registration">
          <button
            variant="primary"
            className={`btn btn-primary mx-2`}
            style={{ width: '80px' }}
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
