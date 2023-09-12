import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  return isLoggedIn ? <Component /> : <Navigate to='/' replace />;
};

export default ProtectedRouteElement;
