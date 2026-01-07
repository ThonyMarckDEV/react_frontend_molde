import React from 'react';
import { Navigate } from 'react-router-dom';
import jwtUtils from 'utilities/Token/jwtUtils';

const ProtectedRouteManager = ({ element }) => {
  // Obtener el JWT desde localStorage
  const access_token = jwtUtils.getAccessTokenFromCookie();


  if (!access_token) {
    return <Navigate to="/404" />;
  }

  const rol = jwtUtils.getUserRole(access_token);
  
  if (rol !== 'ADMIN') {
    return <Navigate to="/404" />;
  }

  // Si hay token, se muestra el elemento original
  return element;

};

export default ProtectedRouteManager;
