import Header from '../components/Header'
import Banner from '../components/Banner'
import Appartements from '../components/Appartements'
import Footer from '../components/Footer'
import { useLocation } from "react-router-dom"
import homePic from "../assets/home_pic.jpg"; 


function Home() {
  const location = useLocation();
  const imagesAndText = {
    "/": {
      image: homePic,
      text: "Chez vous, partout et ailleurs",
    },
  };
  
  const { image, text } = imagesAndText[location.pathname];

  return (
    <>
    < Header />
      <Banner location={location} image={image} text={text} />
      <Appartements />
      <Footer />
    </>
  );
}

export default Home;