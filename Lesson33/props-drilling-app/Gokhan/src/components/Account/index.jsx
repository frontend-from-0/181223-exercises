import { UserDetailsForm } from '../UserDetailsForm';

export const Account = ({ username, onUserNameChange }) => {

  return (
    <div className="account-container">
      <h1>Account information</h1>
      <UserDetailsForm
        username={username}
        onUsernameChange={onUserNameChange}
      />
    </div>
  );
};