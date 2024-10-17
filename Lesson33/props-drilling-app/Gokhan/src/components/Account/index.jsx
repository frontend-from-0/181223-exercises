import {UserDetailsForm} from '../UserDetailsForm';

export const Account = () => {
  return (
    <div className="account-container">
      <h1>Account information</h1>
      <UserDetailsForm incomingUsername='Placeholder user name'/>
    </div>
  )
}