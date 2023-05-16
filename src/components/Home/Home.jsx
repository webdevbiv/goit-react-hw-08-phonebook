import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column " style={{ padding: '16px' }}>
      <h1 className="mb-4 title">Phone Book</h1>
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
