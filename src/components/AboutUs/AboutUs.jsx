import { Link, Outlet } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <p>Aquí puedes encontrar más información sobre nuestro sitio.</p>
      <ul>
        <li>
          <Link to="site-history">Nuestra Historia</Link>
        </li>
        <li>
          <Link to="site-mission">Nuestra Misión</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
