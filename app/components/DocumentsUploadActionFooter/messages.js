/*
 * DocumentsUploadActionFooter Messages
 *
 * This contains all the text for the DocumentsUploadActionFooter component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.DocumentsUploadActionFooter';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the DocumentsUploadActionFooter component!',
  },
  documentsUploadedLabel: {
    id: `${scope}.documentsUploadedLabel`,
    defaultMessage: '{uploadedDocs} of {totalDocs} documents uploaded',
  },
  submitDocumentsButton: {
    id: `${scope}.submitDocumentsButton`,
    defaultMessage: 'Submit documents',
  },
});
