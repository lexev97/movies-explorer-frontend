import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  return props.isLoggedIn ? <Component /> : <Navigate to='/' replace />;
};

export default ProtectedRouteElement;
