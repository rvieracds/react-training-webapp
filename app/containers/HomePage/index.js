import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Login from '../../components/Login';

function HomePage(props) {
  const [phoneCountryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const querySearch = props.location.search;
  const urlParams = new URLSearchParams(querySearch);

  // useEffect(() => {
  //   console.log('props ', props);
  //   // if (!props.login.error) {
  //   if (!null) {
  //     console.log('NAVIGATE TO NEXT SCREEN');
  //     props.history.push("/uploads");
  //   }
  // }, [props.login]);

  useEffect(() => {
    // componentDidMount code here
    setCountryCode(urlParams.get('phoneCountryCode'));
    setPhoneNumber(urlParams.get('phoneNumber'));
    console.log('UPDATE CC + PHONE ');
  }, [querySearch]);

  const handleLogin = code => {
    console.log('call BE to send the passcode: ', code);
    console.log('waiting for BE response');

    console.log('if passcode is ok then navigate to /uploads');
    console.log('if passcode is wrong then show error');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: 53 }}>
        {/* <Login onLogin={handleLogin} error={props.login.error} /> */}
        <Login onLogin={handleLogin} error={null} phoneNumber={phoneNumber} />
      </Container>
    </React.Fragment>
  );
}

export default HomePage;
