import React, {
  useState,
  useEffect,
} from 'react'
// import { FormattedMessage } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ReactCodeInput from 'react-code-input'

import pngmeLogo from '../../images/pngme-logo.svg';
import messages from './messages';


const useStyles = makeStyles(theme => ({
  inputClass: {
    '@media screen and (min-width: 320px)': {
      display: 'flex !important',
    },
  },
}));

const inputProps = {
  inputStyle: {
    width: 45,
    height: 50,
    borderRadius: 4,
    borderWidth: 0,
    margin: 8,
    backgroundColor: 'rgba(34,0,14,0.1)',
    textAlign: 'center',
    MozAppearance: 'textfield',
    fontFamily: 'monospace',
    fontSize: '14px',
  },
  inputStyleInvalid: {
    width: 45,
    height: 50,
    borderRadius: 4,
    borderWidth: 0,
    margin: 8,
    backgroundColor: 'rgba(34,0,14,0.1)',
    textAlign: 'center',
    MozAppearance: 'textfield',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: 'red',
    border: '1px solid red'
  }
}

function HomePage(props) {
  const [code, setCode] = useState('')

  useEffect(() => {
    console.log('props ', props)
    if (code.length === 5){
      console.log('SEND CODE TO BACKEND: ', code)
      console.log('WAITING RESPONSE FROM BE')
      console.log('NAVIGATE TO NEXT SCREEN')

      props.history.push("/uploads")
    }
  }, [code]);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ marginTop: 53 }}>

        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'  }}>
          <img src={pngmeLogo} />

          <div style={{ marginTop: 38 }} className="login-big-title">
            Login with SMS code sent to your mobile
          </div>
          <div style={{ marginTop: 8, marginBottom: 38 }} className="login-sent-to-title">
            Sent to 650-338-8515
          </div>
          <ReactCodeInput
            type='number'
            fields={5}
            autoFocus
            className={classes.inputClass}
            {...inputProps}
            onChange={e => setCode(e)}
            // isValid={this.props.errorVerifyCode === null}
          />
          <div style={{ marginTop: 60 }} className="login-request-code-title">
            Request another code in 1:00
          </div>
        </div>

      </Container>
    </React.Fragment>
  );
}

export default HomePage;
