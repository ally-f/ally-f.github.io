import { useNavigate } from "react-router-dom";
import './gallery.css'

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Gallery Page</h2>
      <div id="header">
        <div className="mark"><h1>Gallery</h1></div>
        <nav className="header-nav">
          <button className="back_button" onClick={() => navigate("/")}>Go back</button>
        </nav>
      </div>

      <div id="content">
        <p>paragraph</p>

        <h3>heading 3</h3>
        <p>paragraph</p>
    </div>


      <div id="footer">
        <div id="footer-container"><p>Thank you again for visiting my website!</p> <p>If you have any questions or would like to get in touch, please feel free to reach out to me via <a id="liame" href="mailto:">email</a> or <a href="www.linkedin.com/in/ally-f-360b2b175">LinkedIn</a>!</p>

          <p>You can also see the repository for this website <a href="https://github.com/ally-f/ally-f.github.io">here</a>.</p></div>
      </div>
    </div>
  );
};
