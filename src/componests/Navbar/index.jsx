import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (

      
      <nav className= {styles.container}>
      <ul className={styles.navbarPrincipal}>
      <li > <Link to="/AboutMe">About Me </Link> </li>
      <li > <Link to="/Works">Works </Link> </li>
      <li > <Link to="/Skills">Skills & Tools </Link> </li>
      <li > <Link to="/ContactMe"> Contact </Link> </li>
    

      </ul>
      </nav>
     

 

  );
};

export default Navbar;
