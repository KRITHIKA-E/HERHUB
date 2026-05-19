import axios from "axios";

const api = axios.create({

  baseURL:
    "http://localhost:5000/api",

  headers: {
    "Content-Type":
      "application/json",
  },

});


// REQUEST INTERCEPTOR

api.interceptors.request.use(

  (config) => {

    // DETECT CURRENT PATH

    const currentPath =
      window.location.pathname;

    let token = null;

    // HIRER TOKEN

    if (
      currentPath.startsWith(
        "/hirer"
      )
    ) {

      token =
        localStorage.getItem(
          "hirerToken"
        );

    }

    // NORMAL USER TOKEN

    else {

      token =
        localStorage.getItem(
          "token"
        );
    }

    // ADD AUTH HEADER

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {

    return Promise.reject(error);
  }
);


// RESPONSE INTERCEPTOR

api.interceptors.response.use(

  (response) => response,

  (error) => {

    const message =

      error.response?.data?.message ||

      error.message ||

      "API request failed";

    return Promise.reject(
      new Error(message)
    );
  }
);

export default api;