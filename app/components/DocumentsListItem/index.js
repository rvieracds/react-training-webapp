import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { StylesProvider } from '@material-ui/core/styles';

import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Icon,
  LeftLabelWrapper,
  LeftTitleLabel,
  LeftSubtitleLabel,
  StyledInputFile,
  UnfilledButton,
  FilledButton,
} from './styles';

import documentIcon from '../../images/pdf-icon.svg';

function DocumentsListItem(props) {
  return (
    <Wrapper>
      <LeftWrapper>
        <Icon src={documentIcon} />
        <LeftLabelWrapper>
          <LeftTitleLabel>{props.name}</LeftTitleLabel>
          <LeftSubtitleLabel>Bill for {props.date}</LeftSubtitleLabel>
        </LeftLabelWrapper>
      </LeftWrapper>

      <RightWrapper>
        <StylesProvider injectFirst>
          <UnfilledButton>Don’t have it</UnfilledButton>
          <StyledInputFile
            id="contained-button-file"
            accept="application/pdf"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <FilledButton component="span">Upload</FilledButton>
          </label>
        </StylesProvider>
      </RightWrapper>
    </Wrapper>
  );
}

DocumentsListItem.propTypes = {};

export default memo(DocumentsListItem);
