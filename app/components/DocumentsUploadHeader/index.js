/**
 *
 * DocumentsUploadHeader
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Wrapper, HeaderTitleIcon, HeaderTitleLabel } from './styles';
import messages from './messages';

function DocumentsUploadHeader() {
  return (
    <Wrapper>
      <HeaderTitleIcon />
      <HeaderTitleLabel>
        <FormattedMessage {...messages.headerTitle} />
      </HeaderTitleLabel>
    </Wrapper>
  );
}

DocumentsUploadHeader.propTypes = {};

export default memo(DocumentsUploadHeader);
