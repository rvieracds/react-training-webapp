import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { ListTitleLabel } from './styles';
import DocumentsListItem from '../DocumentsListItem';

function DocumentsList(props) {
  const renderDocumentItemContainer = item => <DocumentsListItem {...item} />;

  return (
    <div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}
      >
        <ListTitleLabel>
          <FormattedMessage {...messages.utilityBillsLabel} />
        </ListTitleLabel>
      </div>
      {props.utilityBillsList.map(item => renderDocumentItemContainer(item))}

      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}
      >
        <ListTitleLabel>
          <FormattedMessage {...messages.statementsLabel} />
        </ListTitleLabel>
      </div>
      {props.statementsList.map(item => renderDocumentItemContainer(item))}
    </div>
  );
}

DocumentsList.propTypes = {};

export default memo(DocumentsList);
