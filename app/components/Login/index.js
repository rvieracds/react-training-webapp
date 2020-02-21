import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import ReactCodeInput from 'react-code-input';
import { FormattedMessage } from 'react-intl';

import {
  Wrapper,
  StyledInput,
  HeaderTitleIcon,
  HeaderTitleLabel,
  HeaderSubtitleLabel,
  FooterLabel,
} from './styles';
import pngmeLogo from '../../images/pngme-logo.svg';
import messages from './messages';

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
    border: '1px solid red',
  },
};

function Login(props) {
  const [passcode, setPasscode] = useState('');
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    console.log('props ', props)
    if (passcode.length === 5) {
      // props.history.push("/uploads");
      props.onLogin(passcode);
    }
  }, [passcode]);

  return (
    <Wrapper>
      <HeaderTitleIcon src={pngmeLogo} />
      <HeaderTitleLabel>
        <FormattedMessage {...messages.headerTitleLabel} />
      </HeaderTitleLabel>

      <HeaderSubtitleLabel>
        <FormattedMessage
          {...messages.headerSubtitleLabel}
          values={{ phoneNumber: props.phoneNumber || 0 }}
        />
      </HeaderSubtitleLabel>

      <StyledInput>
        <ReactCodeInput
          type="number"
          fields={5}
          autoFocus
          {...inputProps}
          onChange={e => setPasscode(e)}
          isValid={props.error === null}
        />
      </StyledInput>

      <FooterLabel>
        <FormattedMessage
          {...messages.requestNewCodeLabel}
          values={{ countdown: countdown || 0 }}
        />
      </FooterLabel>
    </Wrapper>

    // <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'  }}>
    //   <img src={pngmeLogo} />
    //   <div style={{ marginTop: 38 }} className="login-big-title">
    //     Login with SMS code sent to your mobile
    //   </div>
    //   <div style={{ marginTop: 8, marginBottom: 38 }} className="login-sent-to-title">
    //     Sent to 650-338-8515
    //   </div>
    //   <ReactCodeInput
    //     type='number'
    //     fields={5}
    //     autoFocus
    //     className={classes.inputClass}
    //     {...inputProps}
    //     onChange={e => setCode(e)}
    //     // isValid={this.props.errorVerifyCode === null}
    //   />
    //   <div style={{ marginTop: 60 }} className="login-request-code-title">
    //     Request another code in 1:00
    //   </div>
    // </div>
  );
}

Login.propTypes = {};

export default memo(Login);
