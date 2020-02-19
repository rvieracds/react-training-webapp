/**
 *
 * Login
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import ReactCodeInput from 'react-code-input';
import { FormattedMessage } from 'react-intl';

import {
  Wrapper,
  HeaderTitleIcon,
  HeaderTitleLabel,
  HeaderSubtitleLabel,
  FooterLabel,
} from './styles';
import pngmeLogo from '../../images/pngme-logo.svg';
import messages from './messages';

function Login() {
  return (
    <Wrapper>
      <HeaderTitleIcon src={pngmeLogo} />
      <HeaderTitleLabel>
        <FormattedMessage {...messages.headerTitle} />
      </HeaderTitleLabel>

      <HeaderSubtitleLabel>
        <FormattedMessage {...messages.headerTitle} />
      </HeaderSubtitleLabel>

      <ReactCodeInput
        type='number'
        fields={5}
        autoFocus
        className={classes.inputClass}
        {...inputProps}
        onChange={e => setCode(e)}
        // isValid={this.props.errorVerifyCode === null}
      />

      <FooterLabel>
        <FormattedMessage {...messages.headerTitle} />
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
