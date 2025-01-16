import { UserDetailsForm } from '../UserDetailsForm';
import './styles.css';

export const Account = ({ incomingUsername, updateUsername }) => {
  return (
    <div className="account-container">
      <h1>Account information</h1>
      <UserDetailsForm incomingUsername={incomingUsername} updateUsername={updateUsername} />
    </div>
  );
}