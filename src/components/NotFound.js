// Component imports
import PageNotFound from "../assets/not-found.jpg";
import Asset from "./Asset";
// CSS imports
import styles from "../styles/NotFound.module.css";
// React imports
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <>
      <div className={styles.NotFoundPage}>
        <Link to={"/"} className={styles.NotFoundLink}>
          404 Error. Click here to return to the Homepage.
        </Link>
        <Asset src={PageNotFound} />
      </div>
    </>
  );
};

export default NotFound;
