import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState();
  console.log(file);

  const send = (e) => {
    const data = new FormData();
    data.append("file", file);

    axios
      .post("http://localhost:3000/upload", data)
      .then((res) => {
        console.log(res);
        alert("Enviado");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>POC - Buffer e Upload de arquivos com Multer</p>
        <form action="#">
          <input
            type="file"
            id="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setFile(file);
            }}
            required
          />
        </form>
        <button onClick={send}>Enviar</button>
      </header>
    </div>
  );
}

export default App;
