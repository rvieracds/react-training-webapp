import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the documentsUpload state domain
 */

const selectDocumentsUploadDomain = state =>
  state.documentsUpload || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DocumentsUpload
 */

const makeSelectDocumentsUpload = () =>
  createSelector(
    selectDocumentsUploadDomain,
    substate => substate,
  );

export default makeSelectDocumentsUpload;
export { selectDocumentsUploadDomain };
