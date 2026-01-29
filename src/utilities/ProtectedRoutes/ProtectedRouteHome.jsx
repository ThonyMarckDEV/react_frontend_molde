import React from 'react';
import { Navigate } from 'react-router-dom';
import jwtUtils from 'utilities/Token/jwtUtils';

const ProtectedRoute = ({ element }) => {
  const access_token = jwtUtils.getAccessTokenFromCookie();
  
  if (access_token) {
    const rol = jwtUtils.getUserRole(access_token);

     switch (rol) {
      case 'superadmin':
        return <Navigate to="/superadmin" />;
      case 'admin':
        return <Navigate to="/admin" />;
      case 'usuario':
        return <Navigate to="/usuario" />;
      default:
        return element;
    }
  }

  return element;
};

export default ProtectedRoute;
