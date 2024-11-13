import './styles.css';

export const UserDetailsForm = ({ username, onUsernameChange }) => {

  const handleChange = (e) => {
    onUsernameChange(e.target.value);
  };

  return (
    <form className='user-details-form'>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleChange}
        />
      </label>
      <button type="submit" onClick={() => onUsernameChange(username)}>Update</button>
    </form>
  );
};