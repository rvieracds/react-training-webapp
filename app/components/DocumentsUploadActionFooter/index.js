import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';

import { Wrapper, StyledLabel, FilledButton } from './styles';

import messages from './messages';

function DocumentsUploadActionFooter(props) {
  return (
    <Wrapper>
      <StyledLabel>
        <FormattedMessage
          {...messages.documentsUploadedLabel}
          values={{
            uploadedDocs: props.uploadedDocs || 0,
            totalDocs: props.totalDocs || 0,
          }}
        />
      </StyledLabel>
      <FilledButton>
        <FormattedMessage {...messages.submitDocumentsButton} />
      </FilledButton>
    </Wrapper>
  );
}

DocumentsUploadActionFooter.propTypes = {};

export default memo(DocumentsUploadActionFooter);
