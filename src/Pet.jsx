import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${animal}/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
/*
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <div className="details ">
      <a href={`/details/${id}`} className="pet">
        <div className="info">
          <h1>{name}</h1>
        </div>
        <div className="images">
          {images.length ? (
            images.map((image) => (
              <img key={image} src={image} alt={name} className="image-container" />
            ))
          ) : (
            <img src={hero} alt={name} className="image-container" />
          )}
        </div>
        <div className="info">
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </a>
    </div>
  );
};

export default Pet;
*/
