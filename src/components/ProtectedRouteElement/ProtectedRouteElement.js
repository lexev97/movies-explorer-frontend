import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AppContext from '../../contexts/AppContext';

const ProtectedRouteElement = ({ element: Component }) => {
  const appCtx = useContext(AppContext);
  return appCtx.isLoggedIn ? <Component /> : <Navigate to='/' replace />;
};

export default ProtectedRouteElement;
