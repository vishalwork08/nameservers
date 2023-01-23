import "./App.css";
import Header from "./components/Header";
import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

function App() {
  const apiDomain = "http://localhost:4000/";

  const [domainName, setDomainName] = useState("");
  const [dataFromAPI, setDataFromAPI] = useState([]);

  const lookForNameServers = async () => {
    let domainNameValidationRegex =
      /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

    if (domainNameValidationRegex.test(domainName)) {
      let data = await fetch(apiDomain + domainName);
      let dataInJSON = await data.json();
      setDataFromAPI(dataInJSON);
    } else {
      alert("Invalid domain name");
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
            label="Domain"
            variant="outlined"
          />
          <Button onClick={lookForNameServers} color="success" variant="contained">
            Search
          </Button>
        </Stack>
      </div>

      {/* render name servers after fetching from API */}
      <div className="data">
        <div className="data_val">
          <h4>Hostname</h4>
          <h4>Address</h4>
          <h4>Name Servers</h4>
        </div>
        {dataFromAPI.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.hostname}</h4>
              <h4>{element.address[0]}</h4>
              <h4>
                {element.nameserver &&
                  element.nameserver.map((nsElement, nsKey) => {
                    return <li key={nsKey}>{nsElement}</li>;
                  })}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
