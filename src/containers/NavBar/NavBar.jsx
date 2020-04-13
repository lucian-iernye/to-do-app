import React from "react";
import styles from "./NavBar.module.scss";

// import SearchBar from "../../components/Searchbar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "@reach/router";

const NavBar = props => {
  // const { signInWithRedirect, signOut, user } = props;

  // const getCogJsx = recipes =>
  //   recipes ? (
  //     <span className={styles.faStyles} onClick={props.toggleSettings}>
  //       <FontAwesomeIcon icon="cogs" />
  //     </span>
  //   ) : (
  //     <span className={styles.faStylesDisabled}>
  //       <FontAwesomeIcon icon="cogs" />
  //     </span>
  //   );

  // const getSignInButtons = () => {
  //   if (user) {
  //     return (
  //       <>
  //         <button onClick={signOut}>Sign-out</button>
  //         <img src={user.photoURL} alt={`${user.displayName}'s Face`} />
  //       </>
  //     );
  //   } else {
  //     return <button onClick={signInWithRedirect}>Sign-in</button>;
  //   }
  // };

  return (
    <>
      <nav className={styles.App}>
        <h1>To do App</h1>
        <div className={styles.links}>
          <ul>
            <li>Log In</li>
            <li>Log Out</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
