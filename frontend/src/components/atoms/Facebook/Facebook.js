import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
export const Facebook = ({ setLogged }) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
  });

  const responseFacebook = (response) => {
    console.log(response);
    setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
    });
  };
  let fbContent;
  if (state.isLoggedIn) {
    setLogged(true);
  } else {
    fbContent = (
      <FacebookLogin
        appId="175871004592943"
        autoLoad={true}
        fields="name,email"
        callback={responseFacebook}
      />
    );
  }
  return <div>{fbContent}</div>;
};
