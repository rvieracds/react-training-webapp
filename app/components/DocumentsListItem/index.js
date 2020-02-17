import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Button from '@material-ui/core/Button';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import InputLabel from '@material-ui/core/InputLabel';

import {
  Wrapper,
  LeftWrapper,
  IconWrapper,
  LeftLabelWrapper,
  LeftTitleLabel,
  LeftSubtitleLabel,
  ButtonWrapper,

  UnfilledButton,
  FilledButton,


  // CardInfo,
  // RemoveButton,
  // ExpiresLabel,
  // ExpiresValue,
} from './styles';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import documentIcon from '../../images/pdf-icon.svg';

function DocumentsListItem(props) {
  console.log('props :::: ', props)
  return (
    <Wrapper>
      <LeftWrapper>
        <IconWrapper>
          <img src={documentIcon} />
        </IconWrapper>

        <LeftLabelWrapper>
          <LeftTitleLabel>
            {props.name}
          </LeftTitleLabel>
          <LeftSubtitleLabel>
            {/* <FormattedMessage {...messages.sth /> */}
            Bill for {props.date}
          </LeftSubtitleLabel>
        </LeftLabelWrapper>
      </LeftWrapper>

      <div>
        <UnfilledButton>
          <Button>Don’t have it</Button>
        </UnfilledButton>
        {/* <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        /> */}
        {/* <label htmlFor="contained-button-file" style={{ marginBottom: 0 }}> */}
          <FilledButton>
            <Button variant="contained" >Upload</Button>
          </FilledButton>
        {/* </label> */}
      </div>

    </Wrapper>
    // <div className="documents-rectangle-class" style={{ justifyContent: 'space-between', marginBottom: 16 }}>


      // <div className="row-section-one">
      //   {/* <div style={{ marginRight: 24 }} > */}
      //   <div style={{ marginRight: 0 }} >
      //     <img src={documentIcon} className="documents-rectangle-icon-class"/>
      //   </div>

      //   <div style={{ flex: 1, flexDirection: 'column' }} >
      //     <div className="documents-title-left-side-text" >
      //       Mobile bill
      //     </div>
      //     <div className="documents-subtitle-left-side-text" >
      //       Bill for December 2019
      //     </div>
      //   </div>
      // </div>

      // <div className="row-section-two" >
      //     <Button className={classes.unfilledButton}>Don’t have it</Button>
      //     <input
      //       accept="image/*"
      //       className={classes.input}
      //       id="contained-button-file"
      //       multiple
      //       type="file"
      //     />
      //     <label htmlFor="contained-button-file" style={{ marginBottom: 0 }}>
      //       <Button variant="contained" component="span" className={classes.filledButton} >
      //         Upload
      //       </Button>
      //     </label>
      // </div>

    // </div>
  );
}

DocumentsListItem.propTypes = {};

export default memo(DocumentsListItem);
