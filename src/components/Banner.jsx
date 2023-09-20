import '../sass/components/_banner.scss'
import PropTypes from "prop-types";

export default function Banner({ location, image, text }) {
  if (!location || !image || !text) {
    return null;
  }

  const currentPath = location.pathname;

  return (
    <section className={`banner`}>
      <img src={image} alt="Bannière" />
      {currentPath === "/" && <h1>{text}</h1>}
    </section>
  );
}

Banner.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired, 
};
