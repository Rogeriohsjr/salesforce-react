import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { hideToastAlertAction } from '../../../state/toast-alert/actions';
import { isToastMessageVisible, getToastMessage } from '../../../state/toast-alert/selectors';

const AlertError = (): JSX.Element => {
  const dispatch = useDispatch();
  const toastMessage = useSelector(getToastMessage);
  const showToastMessage = useSelector(isToastMessageVisible);

  if (!showToastMessage) {
    return null;
  }

  return (
    <div className="alert_error__container">
      <div className="alert_error__message-content">
        <div className="alert_error__message-code">{toastMessage.messageCode}</div>
        <div className="alert_error__message-text">{toastMessage.messageText}</div>
      </div>
      <div className="alert_error__message-action">
        <button type="button" onClick={() => dispatch(hideToastAlertAction())}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertError;
