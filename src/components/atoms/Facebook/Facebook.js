import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
export const Facebook = ({ setLogged }) => {
  const [state, setState] = useState({
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
  });
  const componentClicked = () => {
    console.log('clicked');
  };
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
        appId="398696038205344"
        autoLoad={true}
        fields="name,email"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }
  return <div>{fbContent}</div>;
};
