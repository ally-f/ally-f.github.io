import { useNavigate } from "react-router-dom";
import './gallery.css'

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div>
      <div id="header"><h1>Gallery</h1>
      <div className="back_button" onClick={() => navigate("/")}>&larr; Go back</div>
    </div>


    <div id="content">
      
      <div id="current-image">
          <img src={require('../assets/img')} alt="artwork" />

      </div>
    </div>


      <div id="footer">
        <div id="footer-container"><p>:)</p>

        </div>
      </div>
    </div>
  );
};
