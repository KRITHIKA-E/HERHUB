import React from "react";

import {
  Navigate,
} from "react-router-dom";

const ProtectedRoute = ({
  children,
}) => {

  // CHECK BOTH TOKENS

  const token =
    localStorage.getItem(
      "token"
    );

  const hirerToken =
    localStorage.getItem(
      "hirerToken"
    );

  // IF NO LOGIN

  if (
    !token &&
    !hirerToken
  ) {

    return (
      <Navigate to="/login" />
    );
  }

  // SHOW PAGE

  return children;
};

export default ProtectedRoute;