
import React, { useState, useEffect } from 'react';

export const UserDetailsForm = ({ incomingUsername, updateUsername }) => {
  const [username, setUsername] = useState(incomingUsername);

  useEffect(() => {
    setUsername(incomingUsername);
  }, [incomingUsername]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUsername(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};


// import './styles.css';
// import { useContext, useState } from 'react';
// import { UserContext } from '../../context/UserContext';

// export const UserDetailsForm = () => {
//   const { user, setUser } = useContext(UserContext);
//   const [tempUsername, setTempUsername] = useState(user.name);

//   const handleChange = (e) => {
//     setTempUsername(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser((prevUser) => ({ ...prevUser, name: tempUsername }));
//   };

//   return (
//     <form className='user-details-form' onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={tempUsername}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">Update</button>
//     </form>
//   );
// };