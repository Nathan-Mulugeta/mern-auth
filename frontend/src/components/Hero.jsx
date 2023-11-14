import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          {userInfo ? (
            <>
              <h1 className="text-center mb-4">MERN Authentication</h1>
              <p className="text-center mb-4">
                You are successfully signed in.
              </p>
              <Button
                variant="primary"
                className="me-3"
                onClick={logoutHandler}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <h1 className="text-center mb-4">MERN Authentication</h1>
              <p className="text-center mb-4">
                This is a boilerplate for MERN authentication that stores a JWT
                in an HTTP-Only cookie. It also uses Redux Toolkit and the React
                Bootstrap library
              </p>
              <div className="d-flex">
                <LinkContainer to="/login">
                  <Button variant="primary" className="me-3">
                    Sign In
                  </Button>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Button variant="secondary">Register</Button>
                </LinkContainer>
              </div>
            </>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
