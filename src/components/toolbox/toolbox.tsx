import { useNavigate } from "react-router-dom";
import './input_box.ts';
import './input_box.css';

export default function Toolbox () {
  const navigate = useNavigate();

  return (
    <div>
    <head>
    <meta charSet="UTF-8" />
    <title>Temporary List</title>

    <link rel="stylesheet" href="input_box.css" />
    </head>

    <body>
    <div id="listArea">
    <ul id="theList"></ul>
    </div>

    <div id="inputArea">
    <textarea id="textInput"></textarea>
    <br />
    <button id="addButton">Add me!</button>
    <br />
    <button id="clearButton">Clear all items</button>
    </div>
    </body>

    <script src="input_box.ts"></script>
    </div>
  );
};