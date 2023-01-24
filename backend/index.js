const PORT = 4000;

const express = require("express");
const app = express();

const subquest = require('subquest'); // library to fetch name servers

const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser"); // BODYPARSER i.e. used to fetch body/header/path etc in the API calls
app.use(bodyParser.json()); // parse requests of content-type: application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type: application/x-www-form-urlencoded

app.get("/:domainName",
   async (req, res) => {
    let domainName = req.params.domainName;
    if(isValidDomain(domainName)){
      subquest.getSubDomains({host: domainName }, 
        (err, results) => {
          if(err)
            res.status(500).send({message: err});
          else
            res.send(results);
      })
    }
    else{
      res.status(500).send({message: `${domainName} does not seem to be a valid domain name`});
    }
  }
);

app.listen(PORT);


function isValidDomain(str)
{
 regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
  if (regexp.test(str))
      return true;
  else
      return false;
}