import Header from '../components/Header'
import Footer from '../components/Footer'
import "../sass/pages/_error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
        < Header />
            <div className="error">
                <h1>404</h1>
                <h2>Oops! La page que vous demandez n&apos;existe pas</h2>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
                </div>
        <Footer />
    </>
  );
}

export default Error;