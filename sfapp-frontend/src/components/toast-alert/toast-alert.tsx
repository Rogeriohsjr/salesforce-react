import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideToastAlertAction } from './toast-alert.actions';
import { SHOW_TOAST_MESSAGE, TOAST_MESSAGE } from './toast-alert.selectors';
import './toast-alert.css';

const AlertError = (): JSX.Element => {
  const dispatch = useDispatch();
  const toastMessage = useSelector(TOAST_MESSAGE);
  const showToastMessage = useSelector(SHOW_TOAST_MESSAGE);

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
