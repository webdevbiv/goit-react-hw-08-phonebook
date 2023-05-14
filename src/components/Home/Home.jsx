import 'bootstrap/dist/css/bootstrap.min.css';
import s from '../Home/Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mb-4 title">Phone Book</h1>
      <div className="d-flex">
        <Link to="/login">
          <button
            variant="primary"
            className={`btn btn-primary mx-2 ${s.button}`}
          >
            Log in
          </button>
        </Link>
        <Link to="/registration">
          <button
            variant="primary"
            className={`btn btn-primary mx-2 ${s.button}`}
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
