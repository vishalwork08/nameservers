import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";

function App() {
  const apiDomain = "http://localhost:4000/";
  const [loading, setLoading] = useState(false);

  const [domainName, setDomainName] = useState("");
  const [dataFromAPI, setDataFromAPI] = useState([]);

  const lookForNameServers = async () => {
    setLoading(true);
    let domainNameValidationRegex =
      /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

    if (domainNameValidationRegex.test(domainName)) {
      let data = await fetch(apiDomain + domainName);
      let dataInJSON = await data.json();
      setDataFromAPI(dataInJSON);
      setLoading(false);
    } else {
      alert("Invalid domain name");
      setLoading(false);
      return;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={domainName}
            onChange={(event) => setDomainName(event.target.value)}
            id="domain"
            label="Domain URL"
            variant="outlined"
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
                lookForNameServers();
              }
            }}
          />
          <Button
            onClick={lookForNameServers}
            color="success"
            variant="contained"
          >
            Search
          </Button>
        </Stack>
      </div>

      {/* render name servers after fetching from API */}
      <div className="data">
        {loading ? <ColorRing /> : <List dataFromAPI={dataFromAPI} />}
      </div>
    </div>
  );
}

export default App;
