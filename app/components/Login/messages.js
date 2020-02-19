/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Login';

export default defineMessages({
  headerTitleLabel: {
    id: `${scope}.headerTitleLabel`,
    defaultMessage: 'Login with SMS code sent to your mobile',
  },
  headerSubtitleLabel: {
    id: `${scope}.headerSubtitleLabel`,
    defaultMessage: 'Sent to {phoneNumber}',
  },
  requestNewCodeLabel: {
    id: `${scope}.requestNewCodeLabel`,
    defaultMessage: 'Request another code in {timer}',
  },
});
