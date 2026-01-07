import React from 'react';
import { Navigate } from 'react-router-dom';
import jwtUtils from 'utilities/Token/jwtUtils';

const ProtectedRoute = ({ element }) => {
  // Obtener el JWT desde localStorage
  const access_token = jwtUtils.getAccessTokenFromCookie();
  
  if (access_token) {
    const rol = jwtUtils.getUserRole(access_token); // Extraer el rol del token

     // Redirigir según el rol del usuario
     switch (rol) {
      case 'ADMIN':
        return <Navigate to="/admin" />;
      case 'USER':
        return <Navigate to="/usuario" />;
      default:
        return element;
    }
  }

  // Si no hay token, se muestra el elemento original
  return element;
};

export default ProtectedRoute;
