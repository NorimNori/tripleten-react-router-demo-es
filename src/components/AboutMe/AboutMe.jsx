import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div>
      <ul className="links">
        <li>
          <Link to="my-story">Mi historia</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">Mi información de contacto</Link>
        </li>
      </ul>
      <p>Soy una persona sencilla. Veo emojis, escribo reseñas.</p>
    </div>
  );
}

export default AboutMe;
