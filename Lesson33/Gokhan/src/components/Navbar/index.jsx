import "./styles.css";
import { useUserContext } from "../Context/UserContext";
import { Pages } from "../../App";

export const Navbar = ({
  setCurrentPage
}) => {
  const { state, dispatch } = useUserContext();

  console.log("Navbar re-rendered", state);


	function handleSignOut () {
		dispatch({
			type: 'LOGOUT',
		});
		setCurrentPage(Pages.LOGIN);
	}

	function handleHomeClick () {
		if (state.isLoggedInUser) {
			setCurrentPage(Pages.LIST);
		} else {
			setCurrentPage(Pages.LOGIN);
		}
	}

  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="home-btn" onClick={handleHomeClick}>
          Home
        </li>
        {state.isLoggedInUser ? (
          <>
            <li className="account-btn" onClick={() => setCurrentPage(Pages.ACCOUNT)}>
              Account
            </li>
            <li className="out-btn" onClick={handleSignOut}>
              Sign out
            </li>
          </>
        ) : (
          <li className="in-btn" onClick={() => setCurrentPage(Pages.LOGIN)}>
            Sign in
          </li>
        )}
      </ul>
    </nav>
  );
};
