import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, allowedRoles, user }) => {
  if (allowedRoles.includes(user.role)) {
    return <Route element={element} />;
  } else {
    // Redirige a una página de acceso denegado o cualquier otra página de tu elección.
    return <Navigate to="/access-denied" />;
  }
};

export default PrivateRoute;
