import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';



import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import pngmeLogo from '../../images/pngme-logo.svg';
import DocumentsListItem from '../../components/DocumentsListItem';



import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDocumentsUpload from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';






const utilityBillsList = [
  { id: 1, name: 'Mobile bill', status: '', date: 'December 2019' },
  { id: 2, name: 'Television bill', status: '', date: 'December 2019' },
  { id: 3, name: 'Electricity bill', status: '', date: 'December 2019' },
  { id: 4, name: 'Health bill', status: '', date: 'December 2019' },
  { id: 5, name: 'Rent bill', status: '', date: 'December 2019' },
  { id: 6, name: 'Car loan bill', status: '', date: 'December 2019' },
];

const statementsList = [
  { id: 1, name: 'Mobile money statement', status: '', date: 'December 2019' },
  { id: 2, name: 'Nigeria Bank statement', status: '', date: 'December 2019' },
];




const useStyles = makeStyles(theme => ({
  filledButton: {
    backgroundColor: '#ff086e',
    boxShadow: 'none',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#ff086e',
      boxShadow: 'none',
    },
    '@media screen and (max-width: 320px)': {
      fontSize: '4vw',
    },
  },
  
  unfilledButton: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    fontSize: 16,
    color: '#ff086e',
    fontFamily: 'ObjektivMk2-Medium',

    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: 'none',
    },

    '@media screen and (max-width: 320px)': {
      fontSize: '4vw',
    },

  },

  submitDocsButton: {
    boxShadow: 'none',
    fontFamily: 'ObjektivMk2',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    color: 'rgb(34,0,14,0.32)',
    width: 302,
    height: 43,
    borderRadius: 8,
    backgroundColor: '#d3cccf',

    '@media screen and (max-width: 690px)': {
      flex: 1,
      marginTop: 5,
    },
    '@media screen and (max-width: 320px)': {
      width: 'auto',
      fontSize: '4vw',
    },

    '&:hover': {
      backgroundColor: '#d3cccf',
      boxShadow: 'none',
    },
  },
}));

const renderDocumentItemContainer = item => <DocumentsListItem {...item} />

// const renderDocumentItemContainer = (classes) => (
//   <div className="documents-rectangle-class" style={{ justifyContent: 'space-between', marginBottom: 16 }}>

//     <div className="row-section-one">
//       {/* <div style={{ marginRight: 24 }} > */}
//       <div style={{ marginRight: 0 }} >
//         <img src={documentIcon} className="documents-rectangle-icon-class"/>
//       </div>

//       <div style={{ flex: 1, flexDirection: 'column' }} >
//         <div className="documents-title-left-side-text" >
//           Mobile bill
//         </div>
//         <div className="documents-subtitle-left-side-text" >
//           Bill for December 2019
//         </div>
//       </div>
//     </div>

//     <div className="row-section-two" >
//         <Button className={classes.unfilledButton}>Don’t have it</Button>
//         <input
//           accept="image/*"
//           className={classes.input}
//           id="contained-button-file"
//           multiple
//           type="file"
//         />
//         <label htmlFor="contained-button-file" style={{ marginBottom: 0 }}>
//           <Button variant="contained" component="span" className={classes.filledButton} >
//             Upload
//           </Button>
//         </label>
//     </div>

//   </div>
// );



export function DocumentsUpload() {
  useInjectReducer({ key: 'documentsUpload', reducer });
  useInjectSaga({ key: 'documentsUpload', saga });

  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>DocumentsUpload</title>
        <meta name="description" content="Description of DocumentsUpload" />
      </Helmet>
      



      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md" style={{ marginTop: 24, marginBottom: 87 }}>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <p className="upload-docs-title">Upload documents and increase your score</p>
            <p className="upload-docs-subtitle">Utility Bills</p>
          </div>
          {utilityBillsList.map(item => renderDocumentItemContainer(item))}

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <p className="upload-docs-subtitle">Statements</p>
          </div>
          {statementsList.map(item => renderDocumentItemContainer(item))}


          <div className="section-three-class">
            <p className="documents-uploaded-text" style={{ margin: 0, marginLeft: "auto" }} >
              0 of 5 documents uploaded
            </p>  
            <Button variant="contained" component="span" className={classes.submitDocsButton}>
              Submit documents
            </Button>
          </div>

        </Container>
      </React.Fragment>




      {/* <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md" style={{ marginTop: 53, backgroundColor: 'orange' }}>
        </Container>
      </React.Fragment> */}


    </div>
  );
}

DocumentsUpload.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentsUpload: makeSelectDocumentsUpload(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(DocumentsUpload);
