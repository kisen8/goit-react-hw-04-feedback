import PropTypes from 'prop-types';
import { TitleNotification } from './Notification.styled';
export const Notification = ({ message }) => {
  return (
    <div>
      <TitleNotification>{message}</TitleNotification>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
