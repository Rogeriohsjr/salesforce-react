import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { hideToastAlertAction } from '../../../state/toast-alert/actions';
import { selectIsToastMessageVisible, selectToastMessage } from '../../../state/toast-alert/selectors';
import { EnumToastTypes } from './constants';

const AlertError = (): JSX.Element => {
  const dispatch = useDispatch();
  const toastMessage = useSelector(selectToastMessage);
  const showToastMessage = useSelector(selectIsToastMessageVisible);

  const getMainClass = () => {
    let css = 'toast_alert__container ';
    if(toastMessage.type == EnumToastTypes.Success){
      css += 'toast_alert--success';
    } else {
      css += 'toast_alert--error';
    }
    
    return css;
  }

  return (
    <div className="toast_alert__list-alerts">
      {showToastMessage && (
        <div className={getMainClass()}>
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
      )}
    </div>
  );
};

export default AlertError;
