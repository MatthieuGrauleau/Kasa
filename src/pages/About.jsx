import Header from '../components/Header'
import Banner from '../components/Banner'
import Collapse from "../components/Collapse"
import Footer from '../components/Footer'
import "../sass/pages/_about.scss";
import { useLocation } from "react-router-dom"
import aboutPic from "../assets/about_pic.jpg";
import "../sass/components/_collapse.scss";

function Home() {
  const location = useLocation();
  const imagesAndText = {
    "/about": {
      image: aboutPic,
      text: "Texte pour la page 'About'",
    },
  };
  
  const { image, text } = imagesAndText[location.pathname];

  return (
    <>
    < Header />
      <Banner location={location} image={image} text={text} />
      <div className="aboutCollapse">
                <Collapse 
                    title="Fiabilité"
                    content=" Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"/>
                <Collapse
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"/>
                <Collapse
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question"/>
                <Collapse
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
      <Footer />
    </>
  );
}

export default Home;