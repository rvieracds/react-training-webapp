/*
 * DocumentsList Messages
 *
 * This contains all the text for the DocumentsList component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.DocumentsList';

export default defineMessages({
  utilityBillsLabel: {
    id: `${scope}.utilityBillsLabel`,
    defaultMessage: 'Utility Bills',
  },
  statementsLabel: {
    id: `${scope}.statementsLabel`,
    defaultMessage: 'Statements',
  },
});
