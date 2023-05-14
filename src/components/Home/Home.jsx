import 'bootstrap/dist/css/bootstrap.min.css';
// import { useAuth } from 'components/hooks';
import s from '../Home/Home.module.scss';

const Home = () => {
  // const { isLoggedIn } = useAuth;

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mb-4 title">Phone Book</h1>
      <div className="d-flex">
        <button
          variant="primary"
          className={`btn btn-primary mx-2 ${s.button}`}
        >
          Log in
        </button>
        <button
          variant="primary"
          className={`btn btn-primary mx-2 ${s.button}`}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Home;
